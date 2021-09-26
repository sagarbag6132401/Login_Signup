const validation=(value)=>{
    let errors={};
    if (!value.firstName) {
        errors.firstName="First Name is required"
    }
    if (!value.lastName) {
        errors.lastName="Last name is required"
    }
    if (!value.number) {
        errors.number="Phone Number is required"
    }else if (value.number.length!==10) {
        errors.number="Phone Number will be 10 digit"
    }
    if (!value.email) {
        errors.email="Email id is requird"
    }else if (!/\S+@\S+\.\S+/.test(value.email)) {
        errors.email="Email is invalid"
    }
    if (!value.password) {
        errors.password="password is required"
    }
    if (!value.confirmPassword) {
        errors.confirmPassword="Confirm your password"
    }
   else if(value.password!=value.confirmPassword)
    {
        errors.confirmPassword="Password does not match"
    }
    return errors;
}
export default validation;