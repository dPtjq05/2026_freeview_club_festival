# 🎬 AI-Driven Interactive Festival Web App

> **GitHub Portfolio Highlight**: Copilot 및 generative AI 도구를 효과적으로 활용하여 설계부터 UI/UX 모션 구현, JavaScript 프론트엔드 인터랙션까지 단기간에 완성한 축제 웹 애플리케이션 프로젝트입니다.

---

## 📌 Executive Summary (AI 활용 역량 요약)

본 프로젝트는 단순 AI 코드 생성을 넘어, **AI와의 주도적 협업(Human-in-the-Loop)**을 통해 완성도를 극대화한 사례입니다.

- **AI Prompt Engineering & Refinement**: 컴포넌트 단위의 구체적 요구사항 정의 및 피드백 루프를 통해 영화 티켓 모션, 3D 지도 뷰어 등 복잡한 UI 애니메이션 구현
- **Code Architecture Review**: Copilot이 제안한 코드 구조의 한계를 파악하고, 실동작 이벤트를 통합/개선하여 완전한 웹 앱으로 발전
- **Problem Solving & Debugging**: CSS transform/perspective 3D 구현 이슈 및 돔(DOM) 이벤트 바인딩 문제를 AI와의 지속적인 디버깅으로 해결

---

## 🚀 Key Features

* **🎟️ Interactive Gate Sequence**: 티켓 찢기 애니메이션 및 입장 이펙트, BGM 제어 연동
* **🗺️ 3D & Flat Interactive Map**: 층별 부스 렌더링, 뷰(3D/2D) 전환 및 부스 하이라이트/검색
* **📱 Responsive Bottom-sheet & Modals**: 선택한 부스의 상세 정보 제공 및 대기 현황 체크
* **⏳ Real-time Queue Simulation**: 부스 대기 신청 및 LocalStorage 기반 대기 번호 관리
* **💬 Live Guestbook**: 축하 메시지 작성 및 리스트 실시간 업데이트

---

## 🤖 AI Collaboration Workflow (AI 활용 프로세스)

```
[1. 요구사항 정의 및 프롬프트 작성]
       👇
[2. Copilot을 통한 초기 코드 및 UI 구조 생성]
       👇
[3. 개발자 관점의 코드 검토 & 구조적 한계 진단] (예: CSS 모션과 JS 이벤트 미연동)
       👇
[4. AI에 심화 피드백 제공 (구체적 에러 로그, UI 명세 추가)]
       👇
[5. 실동작 로직 통합 및 완성]
```

### 1. UI/UX 구현 및 3D 모션 연동
* **AI 역할**: HTML/CSS 기반의 고도화된 레이아웃 및 Tailwind / 3D transform 스타일 가이드 생성
* **개발자 조율**: 브라우저 렌더링 성능 저하를 방지하기 위해 CSS 애니메이션 최적화 요청 및 리팩토링 진행

### 2. 로직 보완 및 상태 관리
* **AI 역할**: 바텀시트 열기/닫기, LocalStorage 데이터 저장 API 표준 패턴 제공
* **개발자 조율**: 단순 템플릿 코드에 불과했던 스크립트를 실제 사용자 인터랙션과 1:1로 매핑하여 동작하도록 통합

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript (ES6+)
* **Styling & Motion**: Tailwind CSS, Custom Keyframe Animations, CSS 3D Transforms
* **AI Assistant**: GitHub Copilot, Gemini

---

## 📂 Project Structure

```text
.
├── index.html        # 단일 파일 구조 (HTML + Custom Styles + Interactive JS)
└── README.md         # 프로젝트 명세 및 AI 활용 역량 서술 문서
```

---

## 🎯 What I Learned & Demonstrated

1. **AI 프롬프트 최적화 역량**: 원인 분석 중심의 질문 기법을 통해 AI로부터 정확하고 최적화된 코드 수정을 도출해내는 능력 검증
2. **코드 검증 능력**: AI가 제공한 코드를 블라인드하게 적용하지 않고, 보안/성능/구조적 완성도를 높이는 디버깅 기술 발휘
3. **생산성 증대**: 설계부터 고도화된 애니메이션 웹 구현까지의 개발 리드타임을 약 60% 이상 단축
