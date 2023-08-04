export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    }if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (values.password === '') {
        errors.password = 'Password is required';
    }
    else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
    }
    else if (!(values.confirmPassword === values.password)) {
        errors.confirmPassword = "Password doesn't match";
    }
    if (!values.fName) {
        errors.fName = 'First name is required';
    }
    else if (values.fName.length < 2) {
        errors.fName = 'First name must be more than 2 alphabet';
    }
    if (!values.lName) {
        errors.lName = 'Last name is required';
    }
    else if (values.lName.length < 2) {
        errors.lName = 'Last name must be more than 2 alphabet';
    }
    if (!values.phone) {
        errors.phone = 'Phone is required';
    } else if (values.phone.length < 9) {
        errors.phone = 'Phone must be more than 9 numbers';
    }
    if (!values.address) {
        errors.address = 'Address is required';
    }
    if (!values.town) {
        errors.town = 'Town is required';
    }
    if (!values.region) {
        errors.region = 'Region is required';
    }
    if (!values.zip) {
        errors.zip = 'Phone is required';
    } else if (values.zip.length < 5) {
        errors.zip = 'Zip must be more than 6 numbers';
    }
    // if (!values.country) {
    //     console.log(values.country)
    //     errors.country = 'Country is required';
    // }

    return errors;
};