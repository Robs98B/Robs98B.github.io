/**
 * Geometry-Aware Conformal Decoding Simulator
 * Accompanying: "Geometry-Aware Conformal Decoding for Motor BCI Systems"
 * Roberto Bonini, Zhiyuan Luo, Matteo Filippini, Patrizia Fattori (PMLR 2026)
 */
(function() {
  const canvas = document.getElementById('conformal-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const slider = document.getElementById('conf-slider');
  const confValDisplay = document.getElementById('conf-val');
  const resetBtn = document.getElementById('sim-reset-btn');

  let targetConfidence = slider ? parseInt(slider.value, 10) / 100 : 0.95;
  let sweepX = 0;
  let animationFrameId = null;
  let trialData = null;

  // Generate a motor reaching trial with minimum-jerk kinematics & neural decoding noise
  function generateTrial() {
    const N = 120;
    const points = [];
    const peakVelocity = 45 + Math.random() * 25; // mm/s
    const duration = 1200; // ms
    
    // Geometry curvature parameter
    const turnPoint = Math.floor(N * (0.35 + Math.random() * 0.3));
    const turnMagnitude = (Math.random() - 0.5) * 18;

    for (let i = 0; i < N; i++) {
      const tau = i / (N - 1);
      // Minimum-jerk bell-shaped profile: 30*tau^2 - 60*tau^3 + 30*tau^4
      const bell = 30 * Math.pow(tau, 2) - 60 * Math.pow(tau, 3) + 30 * Math.pow(tau, 4);
      let groundTruth = bell * peakVelocity;
      
      // Secondary corrective sub-movement
      if (i > turnPoint) {
        const subTau = (i - turnPoint) / (N - turnPoint);
        groundTruth += Math.sin(subTau * Math.PI) * turnMagnitude;
      }

      // Local trajectory curvature (geometry awareness)
      const curvature = Math.abs(Math.sin(tau * Math.PI * 3)) * 0.6 + 0.4;

      // Simulated neural decoder prediction (with noise and non-stationary residual)
      const decoderNoise = (Math.sin(i * 0.45) * 1.8 + (Math.random() - 0.5) * 3.2);
      const prediction = groundTruth + decoderNoise;

      // Calibration residual score (geometry-weighted nonconformity)
      const nonconformityBase = Math.abs(groundTruth - prediction) + curvature * 2.2;

      points.push({
        t: Math.round(tau * duration),
        tau,
        groundTruth,
        prediction,
        curvature,
        nonconformity: nonconformityBase
      });
    }

    // Sort nonconformity scores for conformal calibration quantile
    const sortedScores = points.map(p => p.nonconformity).sort((a, b) => a - b);

    return {
      points,
      sortedScores,
      duration,
      peakVelocity
    };
  }

  function getConformalBand(alpha) {
    if (!trialData) return { lower: [], upper: [], empiricalCoverage: 0, quantile: 0 };
    
    const scores = trialData.sortedScores;
    const n = scores.length;
    // Conformal prediction quantile: index = ceil((n + 1) * (1 - alpha)) / n
    const qIndex = Math.min(n - 1, Math.max(0, Math.ceil((n + 1) * (1 - alpha)) - 1));
    const qHat = scores[qIndex];

    let coveredCount = 0;
    const lower = [];
    const upper = [];

    trialData.points.forEach(p => {
      // Geometry-aware scaling: bound expands around high-curvature manifolds
      const geomScale = 0.85 + 0.35 * p.curvature;
      const margin = qHat * geomScale;
      const lo = p.prediction - margin;
      const hi = p.prediction + margin;

      lower.push(lo);
      upper.push(hi);

      if (p.groundTruth >= lo && p.groundTruth <= hi) {
        coveredCount++;
      }
    });

    const empiricalCoverage = coveredCount / n;
    return { lower, upper, empiricalCoverage, quantile: qHat };
  }

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height || 260;

    if (canvas.width !== Math.floor(displayWidth * dpr) || canvas.height !== Math.floor(displayHeight * dpr)) {
      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
    }
  }

  function render() {
    resizeCanvas();
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    if (!trialData) {
      ctx.restore();
      return;
    }

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const gridColor = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.04)';
    const textColor = isLight ? 'rgba(71, 85, 105, 0.85)' : 'rgba(148, 163, 184, 0.75)';
    const monoFont = '11px "JetBrains Mono", monospace';

    const padding = { top: 34, right: 30, bottom: 42, left: 52 };
    const plotW = w - padding.left - padding.right;
    const plotH = h - padding.top - padding.bottom;

    // Kinematic bounds
    const maxVal = Math.max(...trialData.points.map(p => p.groundTruth)) * 1.35;
    const minVal = -8;

    const toX = (i, total) => padding.left + (i / (total - 1)) * plotW;
    const toY = (val) => padding.top + plotH - ((val - minVal) / (maxVal - minVal)) * plotH;

    // Draw background grid lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    const yTicks = 4;
    for (let i = 0; i <= yTicks; i++) {
      const yVal = minVal + (i / yTicks) * (maxVal - minVal);
      const yPos = toY(yVal);
      ctx.beginPath();
      ctx.moveTo(padding.left, yPos);
      ctx.lineTo(w - padding.right, yPos);
      ctx.stroke();

      // Y-axis labels
      ctx.fillStyle = textColor;
      ctx.font = monoFont;
      ctx.textAlign = 'right';
      ctx.fillText(`${Math.round(yVal)} mm/s`, padding.left - 8, yPos + 4);
    }

    // X-axis time ticks
    const xTicks = 6;
    for (let i = 0; i <= xTicks; i++) {
      const xPos = padding.left + (i / xTicks) * plotW;
      const tVal = Math.round((i / xTicks) * trialData.duration);
      ctx.beginPath();
      ctx.moveTo(xPos, padding.top);
      ctx.lineTo(xPos, h - padding.bottom);
      ctx.stroke();

      ctx.fillStyle = textColor;
      ctx.font = monoFont;
      ctx.textAlign = 'center';
      ctx.fillText(`${tVal} ms`, xPos, h - padding.bottom + 18);
    }

    // Calculate conformal prediction band for current confidence level
    const alpha = 1 - targetConfidence;
    const band = getConformalBand(alpha);
    const pts = trialData.points;
    const N = pts.length;

    // 1. Conformal Confidence Band Region
    ctx.beginPath();
    ctx.moveTo(toX(0, N), toY(band.upper[0]));
    for (let i = 1; i < N; i++) {
      ctx.lineTo(toX(i, N), toY(band.upper[i]));
    }
    for (let i = N - 1; i >= 0; i--) {
      ctx.lineTo(toX(i, N), toY(band.lower[i]));
    }
    ctx.closePath();

    const bandGrad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    if (isLight) {
      bandGrad.addColorStop(0, 'rgba(79, 70, 229, 0.18)');
      bandGrad.addColorStop(1, 'rgba(6, 182, 212, 0.08)');
    } else {
      bandGrad.addColorStop(0, 'rgba(99, 102, 241, 0.22)');
      bandGrad.addColorStop(1, 'rgba(6, 182, 212, 0.10)');
    }
    ctx.fillStyle = bandGrad;
    ctx.fill();

    // Conformal bound subtle contour lines
    ctx.strokeStyle = isLight ? 'rgba(99, 102, 241, 0.45)' : 'rgba(129, 140, 248, 0.45)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      if (i === 0) ctx.moveTo(toX(i, N), toY(band.upper[i]));
      else ctx.lineTo(toX(i, N), toY(band.upper[i]));
    }
    ctx.stroke();

    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      if (i === 0) ctx.moveTo(toX(i, N), toY(band.lower[i]));
      else ctx.lineTo(toX(i, N), toY(band.lower[i]));
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Decoded Neural Forecast Line (dashed cyan)
    ctx.strokeStyle = isLight ? '#0891b2' : '#22d3ee';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      if (i === 0) ctx.moveTo(toX(i, N), toY(pts[i].prediction));
      else ctx.lineTo(toX(i, N), toY(pts[i].prediction));
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // 3. Ground Truth Kinematic Line (solid vibrant indigo)
    ctx.strokeStyle = isLight ? '#4338ca' : '#818cf8';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      if (i === 0) ctx.moveTo(toX(i, N), toY(pts[i].groundTruth));
      else ctx.lineTo(toX(i, N), toY(pts[i].groundTruth));
    }
    ctx.stroke();

    // 4. Sweeping Real-time Decoding Head
    sweepX = (sweepX + 0.6) % plotW;
    const currentX = padding.left + sweepX;
    const currentFrac = sweepX / plotW;
    const curIndex = Math.min(N - 1, Math.floor(currentFrac * N));
    const curPt = pts[curIndex];

    if (curPt) {
      const curTruthY = toY(curPt.groundTruth);
      const curPredY = toY(curPt.prediction);

      // Vertical scan line
      const scanGrad = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
      scanGrad.addColorStop(0, 'rgba(99, 102, 241, 0)');
      scanGrad.addColorStop(0.5, isLight ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.6)');
      scanGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.strokeStyle = scanGrad;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(currentX, padding.top);
      ctx.lineTo(currentX, h - padding.bottom);
      ctx.stroke();

      // Glow halo at current decoded position
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#22d3ee';
      ctx.fillStyle = '#22d3ee';
      ctx.beginPath();
      ctx.arc(currentX, curPredY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Ground truth dot
      ctx.shadowColor = '#818cf8';
      ctx.fillStyle = '#818cf8';
      ctx.beginPath();
      ctx.arc(currentX, curTruthY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // 5. Telemetry Metric HUD in top-right corner of canvas
    const covPct = (band.empiricalCoverage * 100).toFixed(1);
    const targetPct = (targetConfidence * 100).toFixed(0);
    const valid = band.empiricalCoverage >= targetConfidence - 0.015;

    ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.90)' : 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = isLight ? 'rgba(203, 213, 225, 0.8)' : 'rgba(51, 65, 85, 0.7)';
    ctx.lineWidth = 1;
    const hudW = 210;
    const hudH = 34;
    const hudX = w - padding.right - hudW;
    const hudY = padding.top + 6;

    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(hudX, hudY, hudW, hudH, 6);
    } else {
      ctx.rect(hudX, hudY, hudW, hudH);
    }
    ctx.fill();
    ctx.stroke();

    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = textColor;
    ctx.fillText(`EMPIRICAL COVERAGE:`, hudX + 10, hudY + 14);

    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillStyle = valid ? (isLight ? '#059669' : '#10b981') : (isLight ? '#d97706' : '#f59e0b');
    ctx.fillText(`${covPct}% (Target: ${targetPct}%)`, hudX + 10, hudY + 27);

    ctx.restore();
    animationFrameId = requestAnimationFrame(render);
  }

  // Event Listeners
  if (slider) {
    slider.addEventListener('input', (e) => {
      targetConfidence = parseInt(e.target.value, 10) / 100;
      if (confValDisplay) {
        confValDisplay.textContent = `${e.target.value}%`;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      trialData = generateTrial();
      sweepX = 0;
    });
  }

  // Initialize
  trialData = generateTrial();
  window.addEventListener('resize', resizeCanvas);

  // Start loop
  animationFrameId = requestAnimationFrame(render);
})();
