export function analyzePassword(password)
{
    const result = {
        score: 0,
        strength: "Very Weak",
        checks: {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            symbol: /[^A-Za-z0-9]/.test(password)
        }
    };
    Object.values(result.checks).forEach(check => {
        if (check) result.score++;
    });
    if (result.score === 0)
        result.strength = "Very Weak";
    else if (result.score === 1)
        result.strength = "Weak";
    else if (result.score === 2)
        result.strength = "Fair";
    else if (result.score === 3)
        result.strength = "Good";
    else if (result.score === 4)
        result.strength = "Strong";
    else
        result.strength = "Excellent";
    return result;
}