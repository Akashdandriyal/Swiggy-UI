const loginform = {
    title: "Login",
    form: [
        {
            name: "mobile",
            type: "tel",
            placeholder: "Phone number"
        }
    ],
    button: "LOGIN"
};

const signupform = {
    title: "Sign up",
    form: [
        {
            name: "mobile",
            type: "tel",
            placeholder: "Phone number"
        },
        {
            name: "name",
            type: "text",
            placeholder: "Name"
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email"
        },
        {
            name: "password",
            type: "password",
            placeholder: "Password"
        }
    ],
    button: "CONTINUE"
};

export {loginform, signupform};