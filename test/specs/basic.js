describe('Main Page', function () {
    it('should Title main page is present and correct text', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor = $("//span[@id='site-name']");
        const textTitle = titleProgressMonitor.getText();
        expect(textTitle).toEqual('Progress Monitor');
    });

    it('should Title main page is clickable', function () {
        const titleProgressMonitor = $("//span[@id='site-name']");
        const result = titleProgressMonitor.isClickable();
        expect(result).toEqual(true);
    });

    it('should verify that login button is present and has text', function () {
        const loginButton = $("//a[@qa='login-link']");
        const loginText = loginButton.getText();
        expect(loginText).toEqual('Login')
    });

    it('should verify that login button is clickable', function () {
        const loginButton = $("//a[@qa='login-link']");
        const result = loginButton.isClickable();
        expect(result).toEqual(true);
    });

    it('should verify that register button is present and has text', function () {
        const registerButton = $("//a[@qa='register-link']");
        const registerText = registerButton.getText();
        expect(registerText).toEqual('Register')
    });

    it('should verify that register button is clickable', function () {
        const registerButton = $("//a[@qa='register-link']");
        const result = registerButton.isClickable();
        expect(result).toEqual(true);
    });

});
