// TODO : useState를 react로 부터 import 합니다.
import React, { useState /* TODO */ } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [username, setUsername] = useState('Bob');
  const [msg, setMsg] = useState('');
  const [tweets, setTweets] = useState(dummyTweets);

  const handleButtonClick = (event) => {
    // const tweet = {};
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    const tweet = {
      id: Date.now().toString(),
      username: username,
      picture: 'https://randomuser.me/api/portraits/men/98.jpg',
      title: 'new Tweet',
      content: msg,
      createdAt: new Date().toLocaleDateString('ko-KR'),
      updatedAt: new Date().toLocaleDateString('ko-KR'),
    };
    const newTweets = [tweet, ...tweets];
    setTweets(newTweets);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMsg(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={username}
                  onChange={handleChangeUser}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                ></input>
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  value={msg}
                  onChange={handleChangeMsg}
                  placeholder="your tweet here.."
                  className="tweetForm__input--message"
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
        {/* <Tweet tweet={dummyTweets[0]} /> */}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;