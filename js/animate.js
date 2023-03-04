const staggerAnimation = async () => {
    const animates = document.querySelectorAll('.animate')
    animates.forEach((element, index) => {
        element.style['transition-delay'] = `${index * 0.05}s`
    })
}
const observerHandler = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const elem = entry.target
            elem.classList.add('complete')
            elem.addEventListener('transitionend',()=>{
                elem.style['transition-delay'] = `${0}s`
            })
            return observer.unobserve(entry.target)
        }
    })
}
const observeAnimation = async (element) => {
    const elems = document.querySelectorAll(element)
    elems.forEach((elem) => {
        const observer = new IntersectionObserver(observerHandler, {
            threshold: 0.5
        })
        observer.observe(elem)
    })
}

const init = async () => {
    await staggerAnimation()
    await observeAnimation('.fade')
    await observeAnimation('.fade-bg')
    await observeAnimation('.slide-left')
    await observeAnimation('.slide-up')
}

init()