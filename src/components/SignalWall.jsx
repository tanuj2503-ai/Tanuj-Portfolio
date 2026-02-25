import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const MAX_SIGNALS = 12;

const SignalWall = () => {
  const [value, setValue] = useState('');
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('signal_wall');
    if (stored) {
      try {
        setSignals(JSON.parse(stored));
      } catch {
        setSignals([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('signal_wall', JSON.stringify(signals));
  }, [signals]);

  const signalCount = useMemo(() => `${signals.length}/${MAX_SIGNALS}`, [signals.length]);

  const submitSignal = (event) => {
    event.preventDefault();
    const cleaned = value.trim();

    if (!cleaned) {
      return;
    }

    const next = [
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        text: cleaned.slice(0, 40),
      },
      ...signals,
    ].slice(0, MAX_SIGNALS);

    setSignals(next);
    setValue('');
  };

  return (
    <section id="signal-wall">
      <div className="section-shell">
        <span className="section-kicker">Signal Wall</span>
        <h2 className="section-title">Leave A Signature In The Grid</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.form
            onSubmit={submitSignal}
            className="panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.16em] text-cyan">Broadcast a short signal</p>
            <textarea
              value={value}
              onChange={(event) => setValue(event.target.value)}
              maxLength={40}
              placeholder="ex: Love the futuristic vibe."
              className="mt-4 h-28 w-full resize-none rounded-xl border border-edge bg-canvas/70 p-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-cyan/50"
            />
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.16em] text-text-soft">{signalCount}</p>
              <button
                type="submit"
                className="rounded-lg border border-cyan/50 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan transition-colors hover:bg-cyan/20"
              >
                Send Signal
              </button>
            </div>
          </motion.form>

          <motion.div
            className="panel p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <p className="text-xs uppercase tracking-[0.16em] text-lime">Live signatures</p>
            <div className="mt-4 flex min-h-[11rem] flex-wrap gap-3">
              {signals.length > 0 ? (
                signals.map((signal, index) => (
                  <motion.span
                    key={signal.id}
                    initial={{ opacity: 0, scale: 0.8, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-full border border-edge bg-canvas/70 px-4 py-2 text-xs uppercase tracking-[0.11em] text-text-soft"
                  >
                    {signal.text}
                  </motion.span>
                ))
              ) : (
                <p className="text-sm text-text-soft">
                  No signals yet. Be the first to drop one.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SignalWall;
