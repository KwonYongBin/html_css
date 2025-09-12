import { Menu } from "../commons/Menu.jsx";

export function MenuLeft({menus}) {

    return (
        <ul className="menu-list">
            {!menus || menus.map(menu =>
                <li className="menu-list-item" style={{padding:"0px 10px"}}>
                    <Menu 
                        href={menu.href}
                        name={menu.name}
                        style={menu.style}
                        isIcon={menu.isIcon}
                        icon={menu.icon}
                    />
                    {menu.isBorder ? <span className="menu-list-item-border"></span> : ""}
                </li>
            )}
        </ul>
    );
}

// React에서 JSX 안에서는 일반적인 for문이나 if문을 직접적으로 쓸 수 없는 이유는:

// JSX는 결국 return 안에서 표현식(값)으로 평가되어야 하기 때문

// JSX는 JavaScript의 *표현식(expression)*만 쓸 수 있어.

// if나 for 같은 건 *문(statement)*라서 JSX 안에서는 바로 못 써.

// 대신 map, 삼항 연산자(조건 ? 값1 : 값2), && 같은 표현식을 써서 처리하지.

// React의 렌더링 과정 특성

// React는 상태(state)나 props가 바뀌면 즉시(동기적으로) render() 또는 함수 컴포넌트를 다시 호출해서 JSX를 평가해.

// 이때 JSX 안에서는 곧바로 리턴될 UI 구조가 필요하지, 실행 흐름 제어(for, if)가 길게 끼어들면 React 입장에서 "UI 트리"를 바로 만들 수 없어.

// 그래서 React는 "표현식 기반"으로 UI를 리턴하게끔 유도하는 거지.