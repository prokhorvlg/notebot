import NotebotLogo from '@/images/notebot-logo-nobg.png'

const LoadingScreen = () => {
  return (
    <div className={`loading-screen showLoadingScreen`}>
        <div className="main-logo">
          <div className="box-logo"><img src={NotebotLogo} alt="Notebot Logo" /></div>
          <h1>loading...</h1>
        </div>
      </div>
  )
}

export default LoadingScreen