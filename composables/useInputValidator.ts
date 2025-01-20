const useInputValidator = (type: string, input: string) => {
    const alphaRegex = /^[a-zA-Z]+$/;
    const numberRegex = /^[0-9]+$/;

    const errorMessageList: { [key: string]: string } = {
        number: 'Only numbers are allowed. Please remove any letters or special characters.',
        text: 'Only letters are allowed. Please remove any numbers or special characters.'
    }


    const isValid = type === 'number' ? numberRegex.test(input) : alphaRegex.test(input);

    return !isValid ? errorMessageList[type] : ''
}

export default useInputValidator