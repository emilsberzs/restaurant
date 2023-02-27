export const firstLoad = function () {
    //Initialize 'CONTENT' DIV
    const content = document.getElementById('content')
    //MAIN
    const main = document.createElement('main')
    const usp = document.createElement('div')
    usp.setAttribute('id', 'usp')
    const usp1 = document.createElement('div')
    usp1.setAttribute('id', 'usp1')
    usp1.innerHTML = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    const usp2 = document.createElement('div')
    usp2.setAttribute('id', 'usp2')
    usp2.innerHTML = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    const usp3 = document.createElement('div')
    usp3.setAttribute('id', 'usp3')
    usp3.innerHTML = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    const usp_image = document.createElement('img')
    usp_image.setAttribute('id', 'usp-image')
    usp_image.setAttribute('src', '../src/image2.jpg')
    usp_image.setAttribute('height', '200px')
    usp.append(usp1, usp2, usp3, usp_image)
    main.appendChild(usp)
    content.appendChild(main)
}
