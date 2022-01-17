import {IoIosSearch} from "react-icons/io";
import {IoNotificationsOutline} from "react-icons/io5";
import {BiDotsHorizontalRounded} from "react-icons/bi";

export default function Header() {
    const imgStyle = {width: "17px", height: "14px", objectFit: "contain"}
    const avatarStyle = {backgroundImage: "url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png), url(https://static.wanted.co.kr/images/profile_default.png)"}

    return(
        <header>
            <div className="inner">
                <div className="menu_logo">
                    <button>
                        <img className='menubar' src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" style={imgStyle}></img>
                    </button>
                    <h1 className="logo"><a href="/">wanted</a></h1>
                </div>
                <ul className="gnb">
                    <li className='mobile on'><a href="#">홈</a></li>
                    <li><a href="#">채용</a></li>
                    <li><a href="#">이벤트</a></li>
                    <li><a href="#">직군별 연봉</a></li>
                    <li><a href="#">이력서</a></li>
                    <li>
                        <a href="#">
                            커뮤니티
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan></text></g></g></g></g></g></g></g></g></svg>
                            </span>
                    </a></li>
                    <li><a href="#">프리랜서</a></li>
                    <li><a href="#">
                        AI 합격예측
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fillRule="evenodd" fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" fontSize="9" fontWeight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">Beta</tspan></text></g></g></g></g></g></g></g></g></svg>
                        </span>
                    </a></li>
                </ul>
                <ul className="util">
                    <li>
                        <button className='searchButton'>
                            <IoIosSearch size={20} />
                        </button>
                    </li>
                    <li>
                        <button className='notiButton'>
                            <IoNotificationsOutline size={20} />
                            <span>N</span>
                        </button>
                    </li>
                    <li className='web'>
                        <button className='profileButton'>
                            <div className="avatarImage" style={avatarStyle}></div>
                            <span>N</span>
                        </button>
                    </li>
                    <li className='leftLine web'><a href="#" className='circle'>기업 서비스</a></li>
                    <li className='mobile'>
                        <button className='menudots'>
                            <BiDotsHorizontalRounded size={20} />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}