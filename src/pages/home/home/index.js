export function renderHome() {
    return `
        <section class="home">
            <section class="hero">
                <div class="hero-text">
                    <h1>FocusFlow</h1>
                    <p id="greeting">
                        Stay Focused. Work Smarter.
                    </p>
                </div>
            </section>

            <section class="controls">
                <h2>Quick Controls</h2>
                <div id="controlsContainer"></div>
            </section>

            <section class="features">
                <h2>Productivity</h2>
                <div id="featureGrid"></div>
            </section>
        </section>
    `;
}