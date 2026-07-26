export function passwordTemplate()
{
    return`
    <div class="password-page">
        <div class="page-header">
            <button class="back-button">
                 ←
            </button>
            <h2>Password Strength</h2>
        </div>

        <div class="password-body">
            <label>Password</label>
            <div class="password-input">
                <input
                    id="passwordInput"
                    type="password"
                    placegolder="Enter your password"
                    >
                    <button id="togglePassword">
                        👁
                    </button>
            </div>

            <div class="strength-bar">
                <div
                    id="strengthFill"
                    class="strenght-fill">
                </div>
            </div>

            <div id="strengthText">
                Weak
            </div>

            <ul class="requirements">
                <li id="length">❌ At least 8 characters</li>
                <li id="uppercase">❌ Uppercase letter</li>
                <li id="lowercase">❌ Lowercase letter</li>
                <li id="number">❌ Number</li>
                <li id="symbol">❌ Special character</li>
            </ul>
        </div>
    </div>
    `;
}