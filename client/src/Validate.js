class Validate {
    static isValidPhoneNumber(phoneNumber) {
        // Паттерн для проверки номера телефона
        const phonePattern = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

        return phonePattern.test(phoneNumber);
    }
    static isValidEmail(email) {
        // Регулярное выражение для проверки email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    }
}

export default Validate;