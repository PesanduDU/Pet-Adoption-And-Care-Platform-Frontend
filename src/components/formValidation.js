const validateForm = (formData) => {
    const errors = {};

    // Validate First Name
    if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName.trim())) {
        errors.firstName = 'First name should contain only letters';
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName.trim())) {
        errors.lastName = 'Last name should contain only letters';
    }

    // Validate Email
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
        errors.email = 'Invalid email format';
    }

    // Validate Phone Number
    if (!formData.mobile.trim()) {
        errors.mobile = 'Mobile number is required';
    } else if (!/^\+?94 ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/.test(formData.mobile.trim())) {
        errors.mobile = 'Invalid mobile number format';
    }

    return errors;
};

export default validateForm;
