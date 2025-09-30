import React, { useState, useMemo } from 'react';

// URLの組み立てロジックをコンポーネントの外に切り出す
// viewModeを引数として受け取るように変更
const buildCalendarUrl = (viewMode) => {
    const baseUrl = "https://calendar.google.com/calendar/embed";
    const params = {
        height: 800,
        wkst: 1,
        ctz: "Asia/Tokyo",
        showTitle: 0,
        showTz: 0,
        showPrint: 0,
        mode: viewMode,
        src: [
            "a2lpdGV3b3JsZC5pbmZvcm1hbEBnbWFpbC5jb20",
            "MDQxZDAzZmUyMDY4OTc2M2I3MDhlYjVlMmE0NWYzMGY0NjY1NTk0ZDNmMGM2MThjMmEzYzAzNWZhZDgzZjQwMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
        ],
        color: ["#039be5", "#7cb342"],
    };

    const query = Object.entries(params)
        .flatMap(([key, value]) => {
            if (Array.isArray(value)) {
                return value.map(v => `${key}=${encodeURIComponent(v)}`);
            }
            return `${key}=${encodeURIComponent(value)}`;
        })
        .join('&');

    return `${baseUrl}?${query}`;
};

const Calendar = () => {
    const [viewMode, setViewMode] = useState('AGENDA');

    const toggleViewMode = () => {
        setViewMode(currentMode => (currentMode === 'AGENDA' ? 'AGENDA' : 'MONTH'));
    };

    // viewModeが変更された時だけURLを再計算するようにuseMemoフックを使用
    const calendarUrl = useMemo(() => buildCalendarUrl(viewMode), [viewMode]);

    return (
        <div>
            <div style={{ marginBottom: '15px' }}>
                <button
                    onClick={toggleViewMode}
                    style={{ padding: '8px 12px', cursor: 'pointer', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    表示切替
                </button>
                <span fontSize="0.9rem" style={{ marginLeft: '12px' }}>
                    <span style={{ color: 'rgb(69, 153, 220)' }}>●</span>
                    <span>はツアー予定  / </span>
                    {/* <span style={{ marginLeft: '16px' }}> </span> */}
                    <span style={{ color: 'rgb(139, 179, 85)' }}>●</span>
                    <span>は様々な締切日</span><br />
                </span>
            </div>

            <iframe
                src={calendarUrl}
                style={{ borderWidth: 0, width: '100%', maxWidth: '1000px' }}
                height="800"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar" // ★ アクセシビリティ向上のためtitle属性を追加
            ></iframe>
        </div>
    );
};

export default Calendar;