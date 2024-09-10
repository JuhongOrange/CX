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

