window.addEventListener("load", (e) => {
    nameInput = document.getElementById('nameIn')
    emailInput = document.getElementById('email')
    storyInput = document.getElementById('story')
    nameLabel = document.getElementById('nameLabel')
    emailLabel = document.getElementById('emailLabel')
    storyLabel = document.getElementById('storyLabel')
    nameInput.addEventListener('click', () => {
        nameLabel.style.transform = 'translateY(0)'
        nameLabel.style.fontSize = '1.3vw'
        console.log('nameLabel')
    })
    emailInput.addEventListener('click', () => {
        emailLabel.style.transform = 'translateY(0)'
        emailLabel.style.fontSize = '1.3vw'
        console.log('emailLabel')
    })
    storyInput.addEventListener('click', () => {
        storyLabel.style.transform = 'translateY(0)'
        storyLabel.style.fontSize = '1.3vw'
        console.log('storyLabel')
    })
})