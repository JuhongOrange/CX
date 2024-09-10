// main.js

// 탭 전환 함수
function openTab(tabId) {
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
    localStorage.setItem('activeTab', tabId);
}

document.addEventListener('DOMContentLoaded', function() {
    var activeTab = localStorage.getItem('activeTab');
    if (activeTab) {
        openTab(activeTab);
    } else {
        openTab('tab1');
    }
});

// 완료 버튼 클릭 이벤트 처리
document.querySelector('.complete-btn').addEventListener('click', function() {
    var confirmComplete = confirm('완료 하시겠습니까?');
    if (confirmComplete) {
        const businessName = document.getElementById('businessName').value;
        const author = document.getElementById('author').value;

        localStorage.setItem('businessName', businessName);
        localStorage.setItem('author', author);

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            const id = input.id;
            const value = input.value;
            localStorage.setItem(id, value);
        });

        window.location.href = 'result.html';
    }
});


// 뒤로가기 버튼 클릭 이벤트 처리
document.getElementById('backBtn').addEventListener('click', function() {
    if (confirm('뒤로 가시겠습니까?')) {
        window.history.back();
    }
});

// 저장 버튼 클릭 이벤트 처리 (텍스트 파일로 저장)
document.querySelector('.save-btn').addEventListener('click', function() {
    if (confirm('저장하시겠습니까?')) {
        const today = new Date();
        const yy = String(today.getFullYear()).slice(-2);
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const currentDate = `${yy}${mm}${dd}`;

        const businessName = localStorage.getItem('businessName') || 'unknown';
        const author = localStorage.getItem('author') || 'unknown';

        const fileName = `${currentDate}_${businessName}_설문완료.pdf`;
        const textContent = `사업자명: ${businessName}\n작성자: ${author}`;

        const blob = new Blob([textContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();

        alert('바탕화면에 저장되었습니다.');
    }
});

// 로컬 스토리지에서 데이터를 불러와 화면에 표시
document.getElementById('businessName').textContent = localStorage.getItem('businessName');
document.getElementById('author').textContent = localStorage.getItem('author');

