function openModal(projectId) {
    const modalContainer = document.getElementById('modal-container');
    
    switch (projectId) {
        case 'project1':
            modalContainer.innerHTML = `
                <h1 class="modal-title">프로젝트 1 제목</h1>
                <p class="modal-description">프로젝트 1의 상세 내용입니다. 이 프로젝트는 ...</p>
                <h2 class="modal-title">프로젝트 1 제목</h2>
                <p class="modal-description">프로젝트 1의 상세 내용입니다. 이 프로젝트는 ...</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_1_1.png" alt="슬라이드 1">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_1_2.png" alt="슬라이드 2">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_1_3.png" alt="슬라이드 3">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <h2 class="modal-title">프로젝트 1 제목</h2>
                <p class="modal-description">프로젝트 1의 상세 내용입니다. 이 프로젝트는 ...</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_2_1.png" alt="슬라이드 1">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_2_2.png" alt="슬라이드 2">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_2_3.png" alt="슬라이드 3">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_2_4.png" alt="슬라이드 4">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_2_5.png" alt="슬라이드 5">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <h2 class="modal-title">프로젝트 1 제목</h2>
                <p class="modal-description">프로젝트 1의 상세 내용입니다. 이 프로젝트는 ...</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_1.png" alt="슬라이드 1">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_2.png" alt="슬라이드 2">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_3.png" alt="슬라이드 3">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_4.png" alt="슬라이드 4">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_5.png" alt="슬라이드 5">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_6.png" alt="슬라이드 6">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_7.png" alt="슬라이드 7">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_8.png" alt="슬라이드 8">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_9.png" alt="슬라이드 9">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_10.png" alt="슬라이드 10">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_11.png" alt="슬라이드 11">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_12.png" alt="슬라이드 12">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_13.png" alt="슬라이드 13">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_3_14.png" alt="슬라이드 14">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <h2 class="modal-title">프로젝트 1 제목</h2>
                <p class="modal-description">프로젝트 1의 상세 내용입니다. 이 프로젝트는 ...</p>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_1.png" alt="슬라이드 1">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_2.png" alt="슬라이드 2">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_3.png" alt="슬라이드 3">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_4.png" alt="슬라이드 4">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_5.png" alt="슬라이드 5">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_6.png" alt="슬라이드 6">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_7.png" alt="슬라이드 7">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_8.png" alt="슬라이드 8">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_9.png" alt="슬라이드 9">
                        </div>
                        <div class="swiper-slide">
                            <img class="modal-image" src="assets/img/sliderimg_4_9.png" alt="슬라이드 10">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            `;
            const swiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            break;
        case 'project2':
            modalContainer.innerHTML = `
                <h1 class="modal-title">프로젝트 2 제목</h1>
                <p class="modal-description">프로젝트 2의 상세 내용입니다. 이 프로젝트는 ...</p>
                <img class="modal-image" src="assets/img/project2-detail.png" alt="프로젝트 2 상세 이미지">
            `;
            break;
        case 'project3':
            modalContainer.innerHTML = `
                <h1 class="modal-title">프로젝트 3 제목</h1>
                <p class="modal-description">프로젝트 3의 상세 내용입니다. 이 프로젝트는 ...</p>
                <div class="slider">
                    <img class="modal-image" src="assets/img/project3-slide1.png" alt="슬라이드 1">
                    <img class="modal-image" src="assets/img/project3-slide2.png" alt="슬라이드 2">
                </div>
            `;
            break;
        case 'project4':
            modalContainer.innerHTML = `
                <h1 class="modal-title">프로젝트 4 제목</h1>
                <p class="modal-description">프로젝트 4의 상세 내용입니다. 이 프로젝트는 ...</p>
            `;
            break;
        case 'project5':
            modalContainer.innerHTML = `
                <h1 class="modal-title">프로젝트 5 제목</h1>
                <p class="modal-description">프로젝트 5의 상세 내용입니다. 이 프로젝트는 ...</p>
                <img class="modal-image" src="assets/img/project5-detail.png" alt="프로젝트 5 상세 이미지">
            `;
            break;
    }

    const modal = document.getElementById('modal');
    modal.style.display = "block"; // 모달 열기
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // 모달 닫기
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
