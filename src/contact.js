export const contactPage = function () {
    const main = document.querySelector('main');
    const contact_info = document.createElement('div');
    contact_info.setAttribute('id', 'contactInfo');
    const contactField = document.createElement('p')
    contactField.setAttribute('id', 'contactField')
    contactField.innerHTML = "Call the number or send the email"
    contact_info.appendChild(contactField)
    main.appendChild(contact_info)
}