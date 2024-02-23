const mainContent = "Mong ngày đặc biệt của Xíu sẽ thật đặc biệt như chính Xíu. < " +
"Chúc Xíu sinh nhật tràn ngập tiếng cười, tình yêu và tất cả những khoảnh khắc nhỏ xinh làm cuộc sống thêm nhiều màu sắc.<" +
"Hãy tiếp tục tỏa sáng và lấp lánh như những ngôi sao.<"+
"Hy vọng năm nay sẽ mang lại những tác động tích cực và niềm vui không ngừng.<"+
"Mong tuổi mới của Xíu sẽ là minh chứng cho sự tuyệt vời của Xíu.<"+
"Và bằng tất cả chân thành, Xíu xứng đáng với những điều tốt đẹp nhất.<"

const allbum1 = {
    content: "May your birthday be filled with the same joy, love, and laughter that you bring into my life. Cheers to another year of amazing friendship!",
    cdn: "./img/IMG_1900.JPG"
}

const allbum2 = {
    content: "Cheers to the one who adds so much flavor to my life. May your birthday be as delightful and unforgettable as our friendship. Happy birthday to a truly radiant woman!",
    cdn: "https://github.com/hpbddaoxinh/hpbddaoxinh.github.io/blob/main/img/IMG_0007.jpg?raw=true"
}

function playAudio() {
    var audio = document.getElementById('myAudio');
    audio.play();
}


const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
    const letter = document.querySelector(".letter");
    letter.classList.add("active");
    setTimeout(() => {
        const designContent = mainContent.split("");
        const mainLetterPage = document.querySelector(".letterContent");

        designContent.forEach((val, index) => {
            setTimeout(() => {
                if (val === "<") {
                    // Nếu là dấu `<`, thì thêm thẻ `<br>` thay vì ký tự `<`
                    mainLetterPage.insertAdjacentHTML('beforeend', '<br>');
                } else {
                    mainLetterPage.insertAdjacentHTML('beforeend', val);
                }

                if (index == (designContent.length - 1)) {
                    const allBum1 = document.querySelector("#allbum1");
                    allBum1.classList.add("active");

                    setTimeout(() => {
                        const contentAllbum1 = allbum1.content.split("");
                        allBum1.querySelector(".imgAllbum").src = allbum1.cdn;

                        contentAllbum1.forEach((valAllbum1, indexAllbum1) => {
                            setTimeout(() => {
                                allBum1.querySelector(".detailAllbum").innerHTML += valAllbum1;
                                if (indexAllbum1 == (contentAllbum1.length - 1)) {
                                    const allBum2 = document.querySelector("#allbum2");
                                    allBum2.classList.add("active");

                                    setTimeout(() => {
                                        const contentAllbum2 = allbum2.content.split("");
                                        allBum2.querySelector(".imgAllbum").src = allbum2.cdn;

                                        contentAllbum2.forEach((valAllbum2, indexAllbum2) => {
                                            setTimeout(() => {
                                                allBum2.querySelector(".detailAllbum").innerHTML += valAllbum2   
                                            }, 100 * (indexAllbum2 + 1))
                                        })
                                    })
                                }
                            }, 100 * (indexAllbum1 + 1))
                        })
                    }, 500)
                }
            }, 10 * index)
        })
    }, 500)
})