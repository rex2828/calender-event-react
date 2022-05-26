

function formtoJSON(formId) {
    const form = document.getElementById(formId);
    const formJSON = { formId: undefined, elements: [] }
    formJSON.formId = form.id;
    for (let i = 0; i < form.length; i++) {
        let formElement = form[i];
        formJSON.elements.push({
            "elementType": formElement.tagName == false ? 'NOT AVAILABLE' : formElement.tagName,
            "type": formElement.type,
            "id": formElement.id,
            "name": formElement.name,
            "placeholder": formElement.placeholder,
            "class": formElement.className == false ? 'NOT AVAILABLE' : formElement.className
        })
        console.log({ "id": 'html' }.id)
    }
    return formJSON;
}


const formToJSON = elements =>
    [].reduce.call(
        elements,
        (data, element) => {
            // Make sure the element has the required properties and should be added.
            if (isValidElement(element) && isValidValue(element)) {
                /*
             * Some fields allow for more than one value, so we need to check if this
             * is one of those fields and, if so, store the values as an array.
             */
                if (isCheckbox(element)) {
                    data[element.name] = (data[element.name] || []).concat(element.value);
                } else if (isMultiSelect(element)) {
                    data[element.name] = getSelectValues(element);
                } else {
                    data[element.name] = element.value;
                }
            }

            return data;
        },
        {}
    );


const formJSON = formtoJSON('testForm');
console.log(formJSON.elements)