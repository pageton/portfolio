export function reveal(node: HTMLElement, { delay = 0, duration = 800, y = 20 } = {}) {
    // Initial styles
    node.style.opacity = '0';
    node.style.transform = `translateY(${y}px)`;
    node.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.style.opacity = '1';
                node.style.transform = 'translateY(0)';
                observer.unobserve(node);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
