export function createFeatureCard(data)
{
    return `
        <button class="feature-card" data-page="${data.page}">

            <div class="card-header">
                <div class="card-icon">
                    <img src="${data.icon}" alt="${data.title}">
                </div>
            </div>

            <div class="card-content">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            </div>

            <div class="card-footer">
                <span class="card-arrow">→</span>
            </div>
        </button>
    `;
}