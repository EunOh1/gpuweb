const isMobile = () => { 
    // return /Android|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    return window.matchMedia('(pointer:coarse)').matches;//pointer:coarse'는 대략적인 입력 방식(예: 손가락)을 가진 기기를 의미하며, 이는 통상적으로 모바일 기기에 해당
    // return true;

}; // =========> mobile device check function

export default isMobile;