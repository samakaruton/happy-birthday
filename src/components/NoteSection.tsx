import { useState } from "react";
import { Flower } from "./Flower";

export function NoteSection() {
  const [noteOpen, setNoteOpen] = useState(false);
  return (
    <section className="note-section shell" id="note">
      <div className={`note-card ${noteOpen ? "note-card-open" : ""}`}>
        <div className="note-flower">
          <Flower />
        </div>
        <p className="eyebrow">
          <span /> Open when you need a smile
        </p>
        <h2>
          A note, just
          <br />
          <i>for you.</i>
        </h2>
        {!noteOpen ? (
          <button
            className="button button-yellow"
            type="button"
            onClick={() => setNoteOpen(true)}
          >
            Open your birthday note <span>→</span>
          </button>
        ) : (
          <div className="revealed-note">
            <p>
              May this next trip around the sun bring you slow mornings, brave
              beginnings, belly laughs, and every good thing you’ve been quietly
              wishing for.
            </p>
            <strong>Happy birthday, beautiful. ♡</strong>
          </div>
        )}
      </div>
      <div className="note-side">
        <div className="quote-mark">“</div>
        <p>
          The world is a little warmer, brighter, and more interesting because
          you’re in it.
        </p>
        <span>— with all my love</span>
        <div className="side-daisy">
          <Flower />
        </div>
      </div>
    </section>
  );
}
