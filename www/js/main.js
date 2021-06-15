const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const service = document.querySelector('#service')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const serviceContent = document.querySelector('#service-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        background: '#00aa00',
        width: '800px',
        height: '600px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        background: '#00aa00',
        width: '600px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: contactContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})

service.addEventListener('click', () => {
    const serviceBox = new WinBox({
        title: 'Service',
        background: '#00aa00',
        width: '800px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: serviceContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#777')
        }
    })
})