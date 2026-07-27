import { createFeatureCard } from "../../components/card/card.js";
export function renderHome() {
    const features = [
        {
            title: "Color Picker",
            description: "Pick and copy website colors.",
            page: "colorpicker",
            icon: "assets/icons/features/colorpicker.svg"
        },

        {
            title: "Password Strength",
            description: "...",
            page: "password",
            icon: "assets/icons/features/password.svg"
        },

        {
            title: "Sticky Notes",
            description: "Notes attached to every website.",
            page: "notes",
            icon: "assets/icons/features/notes.svg"
        },

        {
            title: "Focus Mode",
            description: "Hide distractions.",
            page: "focus",
            icon: "assets/icons/features/focus.svg"
        },

    ];
    return `

    <div class="home-page">
        <section class="hero">
           <div class="hero-content">
                <div class="hero-left">
                    <div class="brand">
                        <img
                            src="assets/logo/logo.svg"
                            alt="FocusFlow Logo"
                            class="logo">
                       <div class="hero-text">
                            <h1>FocusFlow</h1>

                            <p>
                                Stay Focused.<br>
                                Work Smarter.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="quick-section">
            <h2>
                Quick Controls
            </h2>
            <div class="quick-grid">
               <div class="control-card">
                    <div class="control-header">
                        <div>
                            <h3>Dark Mode</h3>
                            <p>Enable website dark mode</p>
                        </div>

                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>

                <div class="control-card volume">
                    <h3>Volume Booster</h3>
                    <input type="range" min="100" max="600" value="100">
                    <div class="volume-footer">
                        <span>100%</span>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h2>
                Productivity
            </h2>
            <div class="feature-grid">
                ${features.map(createFeatureCard).join("")}
            </div>
        </section>
    </div>
    `;
}