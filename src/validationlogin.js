const validationlogin = (value) => {
    let errors = {};

    if (!value.email) {
        errors.email = "Email id is requird"
    } else if (!/\S+@\S+\.\S+/.test(value.email)) {
        errors.email = "Email is invalid"
    }
    else if (value.email !== "sagar@gmail.com") {
        errors.email = "Wrong email id"
    }

    if (!value.password) {
        errors.password = "password is required"
    }
    else if (value.password !== "111") {
        errors.password = "wrong passowrd"
    }

    return errors;
}
export default validationlogin