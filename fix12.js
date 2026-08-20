const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove xl:pr-[380px]
code = code.replace(/xl:pr-\[380px\]/g, '');

// Remove NEWS TEXT LIST SECTION
const startStr = "{/* NEWS TEXT LIST SECTION */}";
const endStr = "{/* RECOMMENDED VIDEOS SECTION */}";
const startIdx = code.indexOf(startStr);
const endIdx = code.indexOf(endStr);
if (startIdx !== -1 && endIdx !== -1) {
    code = code.substring(0, startIdx) + code.substring(endIdx);
}

// Change RECOMMENDED VIDEOS to NEWS and change tabs
code = code.replace('추천 영상', 'NEWS');
code = code.replace('>KLPGA</button>', '>전체 기사</button>');
code = code.replace('>레슨</button>', '>공지사항</button>');
code = code.replace('>KPGA</button>', '>대회 정보</button>');
code = code.replace('>GTOUR</button>', '>업데이트</button>');

fs.writeFileSync('src/app/page.tsx', code, 'utf8');
