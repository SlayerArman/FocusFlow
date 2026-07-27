export function colorPickerTemplate()
{
    return `
    <div class="color-page">
        <div class="page-header">
            <button class="back-button">
                ←
            </button>
            <h2>Color Picker</h2>
        </div>
        <div class="page-body">
            <input
                type="color"
                id="picker"
                value="#2563EB"
            >
            <div class="color-preview">
                <div
                    id="preview"
                    class="preview-box"
                    style="background:#2563EB;">
                </div>
                <input
                    id="hexValue"
                    readonly
                    value="#2563EB"
                >
            </div>
            <button id="copyColor">
                Copy HEX
            </button>
        </div>
    </div>
    `;
}