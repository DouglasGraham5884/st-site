'use strict'

{
    const clock = () => {
        // 現在の日時・時刻の情報を取得
        const d = new Date();

        // 年を取得
        let year = d.getFullYear();
        // 月を取得
        let month = d.getMonth() + 1;
        // 日を取得
        let date = d.getDate();
        // 曜日を取得
        let dayNum = d.getDay();
        const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let day = weekday[dayNum];
        // 時を取得
        let hour = d.getHours();
        // 分を取得
        let min = d.getMinutes();
        // 秒を取得
        let sec = d.getSeconds();

        // 一桁の場合は 0 を足して二桁に
        month = month < 10 ? "0" + month : month;
        date = date < 10 ? "0" + date : date;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        // 日付・時刻の文字列を作成
        let today = `${year}.${month}.${date} ${day}`;
        let time = `${hour}:${min}:${sec}`;

        // 文字列を出力
        document.querySelector(".clock-date").innerText = today;
        document.querySelector(".clock-time").innerText = time;
    };

    // 一秒ごとに clock 関数を呼び出す
    setInterval(clock, 1000);

    const body = document.querySelector('body');
    const button = document.querySelector('button');
    
    button.addEventListener('click', () => {
        body.classList.toggle("blue_color");
        body.classList.toggle("black_color");
        button.classList.toggle("blue_color");
        button.classList.toggle("black_color");
    });
}