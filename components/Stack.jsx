const Stack = () => {
  return (
    <section className='stack'>
      <h3 className='h3 stack-title'>My Tech Stack</h3>

      <ul className='grid grid-cols-2 gap-5 my-10 lg:grid-cols-6 md:grid-cols-3'>
        {/* html */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 32 32'
            >
              <path
                fill='#e44f26'
                d='M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30z'
              ></path>
              <path
                fill='#f1662a'
                d='m16 27.858l8.17-2.265l1.922-21.532H16z'
              ></path>
              <path
                fill='#ebebeb'
                d='M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004z'
              ></path>
              <path
                fill='#fff'
                d='M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83z'
              ></path>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>HTML</p>
          </div>
        </li>

        {/* css */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 32 32'
            >
              <path
                fill='#1572b6'
                d='M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30z'
              ></path>
              <path
                fill='#33a9dc'
                d='m16 27.858l8.17-2.265l1.922-21.532H16z'
              ></path>
              <path
                fill='#fff'
                d='M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16z'
              ></path>
              <path
                fill='#ebebeb'
                d='m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004z'
              ></path>
              <path
                fill='#fff'
                d='m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007z'
              ></path>
              <path
                fill='#ebebeb'
                d='M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829z'
              ></path>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>CSS</p>
          </div>
        </li>

        {/* javascript */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 72 72'
            >
              <path
                fill='#fcea2b'
                d='M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965'
              ></path>
              <g fill='none' stroke='#000' strokeLinejoin='round'>
                <path
                  strokeWidth={2}
                  d='M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z'
                ></path>
                <path
                  strokeLinecap='round'
                  strokeMiterlimit={10}
                  strokeWidth={4.45}
                  d='M53.82 41.34c-.456-1.777-2.429-3.11-4.793-3.11c-2.703 0-4.893 1.743-4.893 3.896c0 2.151 2.191 3.896 4.893 3.896l-.1.013c2.703 0 4.893 1.745 4.893 3.896c0 2.153-2.191 3.896-4.893 3.896c-2.364 0-4.337-1.336-4.793-3.112'
                  clipRule='evenodd'
                ></path>
                <path
                  strokeLinecap='round'
                  strokeMiterlimit={10}
                  strokeWidth={4.46}
                  d='M36.74 38.23v10.03a5.568 5.568 0 0 1-9.296 4.139'
                  clipRule='evenodd'
                ></path>
              </g>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>JavaScript</p>
          </div>
        </li>

        {/* ruby */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 72 72'
            >
              <defs>
                <path
                  id='openmojiRuby0'
                  d='m36 64.08l32-40.73l-11.62-11.37h-40L4 23.35z'
                ></path>
              </defs>
              <path
                fill='#d22f27'
                d='m61.711 61.715l-6.174-51.428l-16.256.177L10.997 38.75l-.714 16.794z'
              ></path>
              <path
                fill='#ea5a47'
                d='M61.45 59.516L46.875 18.95L24.87 24.875l14.411-14.41l16.256-.178z'
              ></path>
              <g
                fill='none'
                stroke='#000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
                strokeWidth={2}
                transform='rotate(-45.001 46.006 31.85)'
              >
                <use href='#openmojiRuby0'></use>
                <path d='M55.75 23.86L36 64.08v-52.1L16.26 23.35m0 .51L36 64.08M4 23.35h64M36 11.98l19.75 11.37'></path>
                <use href='#openmojiRuby0'></use>
              </g>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>Ruby</p>
          </div>
        </li>

        {/* rails */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 256 256'
            >
              <g fill='none'>
                <rect width={256} height={256} fill='#d30001' rx={60}></rect>
                <path
                  fill='#fff'
                  d='m227.87 116.783l.13.129s-1.499 1.058-3.086 2.381c-50.089-37.037-80.688-19.577-90.3-14.903c-43.651 24.357-31.037 84.15-30.78 85.343l.004.018H34.173s2.645-26.102 21.164-56.966c18.518-30.864 50.088-54.233 75.749-56.526c49.48-4.956 94.073 37.871 96.784 40.524m-121.387 55.332l9.524 3.439c.441 3.454 1.066 6.724 1.721 9.708l.395 1.756l-10.582-3.792c-.441-2.646-.881-6.438-1.058-11.111m-74.074-28.572l10.141 3.704c-1.234 2.855-2.806 6.52-3.948 9.4l-.46 1.182L28 154.125c.882-2.381 2.734-6.79 4.41-10.582m78.043-3.527l6.349 5.026a71 71 0 0 0-1.609 8.254l-.243 2.064l-7.143-5.644c.705-3.175 1.499-6.437 2.646-9.7m15.608-24.603l3.968 5.996c-1.552 1.623-2.991 3.245-4.272 4.958l-.931 1.303l-4.232-6.349a49 49 0 0 1 5.467-5.908m-63.14-13.051l6.262 5.467a87 87 0 0 0-4.576 5.183l-1.42 1.783l-6.79-5.82c2.027-2.204 4.232-4.409 6.525-6.613m87.39-.353l1.94 5.82c-2.045.635-4.091 1.439-6.137 2.367l-1.535.719l-2.028-6.084a64 64 0 0 1 7.76-2.822m20.635-2.117c2.258.142 4.572.395 6.942.807l1.788.34l-.352 5.467a49.4 49.4 0 0 0-6.984-.973l-1.746-.085zm-72.4-24.338l3.968 6.084c-1.72.86-3.39 1.82-5.084 2.84l-1.706 1.04l-4.057-6.172a140 140 0 0 1 6.879-3.792m72.575-3.351c5.247 1.499 7.504 2.526 8.408 3.007l.145.08l-.352 5.907a150 150 0 0 0-5.67-2.175l-2.884-1zM137.436 67l1.763 5.38h-.882a81 81 0 0 0-5.754.185l-1.917.167l-1.676-5.203a70 70 0 0 1 8.466-.529'
                ></path>
              </g>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>Rails</p>
          </div>
        </li>

        {/* nodejs */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 128 128'
            >
              <path
                fill='url(#deviconNodejs0)'
                d='M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z'
              ></path>
              <path
                fill='url(#deviconNodejs1)'
                d='M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072'
              ></path>
              <path
                fill='url(#deviconNodejs2)'
                d='M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z'
              ></path>
              <defs>
                <linearGradient
                  id='deviconNodejs0'
                  x1={34.513}
                  x2={27.157}
                  y1={15.535}
                  y2={30.448}
                  gradientTransform='translate(-129.242 -73.715)scale(6.18523)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#3f873f'></stop>
                  <stop offset={0.33} stopColor='#3f8b3d'></stop>
                  <stop offset={0.637} stopColor='#3e9638'></stop>
                  <stop offset={0.934} stopColor='#3da92e'></stop>
                  <stop offset={1} stopColor='#3dae2b'></stop>
                </linearGradient>
                <linearGradient
                  id='deviconNodejs1'
                  x1={30.009}
                  x2={50.533}
                  y1={23.359}
                  y2={8.288}
                  gradientTransform='translate(-129.242 -73.715)scale(6.18523)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset={0.138} stopColor='#3f873f'></stop>
                  <stop offset={0.402} stopColor='#52a044'></stop>
                  <stop offset={0.713} stopColor='#64b749'></stop>
                  <stop offset={0.908} stopColor='#6abf4b'></stop>
                </linearGradient>
                <linearGradient
                  id='deviconNodejs2'
                  x1={21.917}
                  x2={40.555}
                  y1={22.261}
                  y2={22.261}
                  gradientTransform='translate(-129.242 -73.715)scale(6.18523)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset={0.092} stopColor='#6abf4b'></stop>
                  <stop offset={0.287} stopColor='#64b749'></stop>
                  <stop offset={0.598} stopColor='#52a044'></stop>
                  <stop offset={0.862} stopColor='#3f873f'></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>Node js</p>
          </div>
        </li>

        {/* reactjs */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 256 256'
            >
              <g fill='none'>
                <rect width={256} height={256} fill='#242938' rx={60}></rect>
                <path
                  fill='#00d8ff'
                  d='M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656'
                ></path>
                <path
                  stroke='#00d8ff'
                  strokeWidth={8.91}
                  d='M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z'
                  clipRule='evenodd'
                ></path>
                <path
                  stroke='#00d8ff'
                  strokeWidth={8.91}
                  d='M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z'
                  clipRule='evenodd'
                ></path>
                <path
                  stroke='#00d8ff'
                  strokeWidth={8.91}
                  d='M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z'
                  clipRule='evenodd'
                ></path>
              </g>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>React js</p>
          </div>
        </li>

        {/* nextjs */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 128 128'
            >
              <circle cx={64} cy={64} r={64}></circle>
              <path
                fill='url(#deviconNextjs0)'
                d='M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209'
              ></path>
              <path
                fill='url(#deviconNextjs1)'
                d='M81.778 38.4h8.533v51.2h-8.533z'
              ></path>
              <defs>
                <linearGradient
                  id='deviconNextjs0'
                  x1={109}
                  x2={144.5}
                  y1={116.5}
                  y2={160.5}
                  gradientTransform='scale(.71111)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#fff'></stop>
                  <stop offset={1} stopColor='#fff' stopOpacity={0}></stop>
                </linearGradient>
                <linearGradient
                  id='deviconNextjs1'
                  x1={121}
                  x2={120.799}
                  y1={54}
                  y2={106.875}
                  gradientTransform='scale(.71111)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#fff'></stop>
                  <stop offset={1} stopColor='#fff' stopOpacity={0}></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>Next js</p>
          </div>
        </li>

        {/* tailwind */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 128 128'
            >
              <path
                fill='#38bdf8'
                d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0'
              ></path>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>Tailwind</p>
          </div>
        </li>

        {/* mongodb */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 256 256'
            >
              <g fill='none'>
                <rect width={256} height={256} fill='#023430' rx={60}></rect>
                <path
                  fill='#10aa50'
                  d='M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773'
                ></path>
                <path
                  fill='#b8c4c2'
                  d='M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397'
                ></path>
                <path
                  fill='#12924f'
                  d='M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684'
                ></path>
              </g>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>MongoDB</p>
          </div>
        </li>

        {/* postgresql */}
        <li className='flex flex-col items-center stack-item'>
          <div className='stack-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2.5em'
              height='2.5em'
              viewBox='0 0 256 256'
            >
              <g fill='none'>
                <rect width={256} height={256} fill='#242938' rx={60}></rect>
                <path
                  fill='#336791'
                  d='M203.48 148.688c-20.32 4.19-21.796-2.693-21.796-2.693c21.466-31.852 30.445-72.282 22.696-82.175c-21.121-27-57.691-14.224-58.303-13.893l-.197.035a72.5 72.5 0 0 0-13.563-1.414c-9.197-.14-16.172 2.412-21.473 6.427c0 0-65.236-26.873-62.199 33.8c.647 12.909 18.493 97.734 39.797 72.07c7.847-9.436 15.37-17.361 15.37-17.361c3.727 2.482 8.206 3.748 12.896 3.291l.365-.309a14.2 14.2 0 0 0 .148 3.642c-5.484 6.131-3.867 7.207-14.836 9.464c-11.095 2.285-4.57 6.356-.323 7.425c5.161 1.294 17.1 3.122 25.172-8.17l-.324 1.286c2.152 1.723 3.656 11.201 3.403 19.793c-.253 8.593-.422 14.485 1.266 19.097s3.375 14.977 17.789 11.953c12.045-2.58 18.281-9.281 19.16-20.432c.619-7.932 2.011-6.765 2.11-13.852l1.125-3.361c1.286-10.758.21-14.224 7.628-12.607l1.807.162c5.464.246 12.615-.879 16.805-2.827c9.035-4.19 14.393-11.194 5.484-9.351z'
                ></path>
                <path
                  stroke='#fff'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={5.03}
                  d='M146.07 48.596c-2.25.703 36.31-14.097 58.233 13.908c7.735 9.893-1.23 50.323-22.697 82.174m-53.508 9.106c-.562 20.011.141 40.162 2.096 45c1.954 4.837 6.152 14.414 20.573 11.334c12.045-2.58 16.432-7.58 18.331-18.612l4.45-35.275zM110.816 53.469S45.537 26.779 48.575 87.45c.647 12.909 18.492 97.734 39.797 72.07c7.776-9.373 14.808-16.706 14.808-16.706z'
                ></path>
                <path
                  stroke='#fff'
                  strokeLinecap='round'
                  strokeLinejoin='bevel'
                  strokeWidth={5.03}
                  d='M181.613 144.664s1.407 6.891 21.797 2.686c8.909-1.842 3.544 5.161-5.484 9.352c-7.411 3.445-24.033 4.324-24.307-.422c-.703-12.27 8.747-8.543 8.065-11.616c-.619-2.77-4.852-5.484-7.636-12.262c-2.44-5.907-33.469-51.258 8.606-44.53c1.547-.316-10.969-40.077-50.344-40.654s-38.13 48.41-38.13 48.41'
                ></path>
                <path
                  stroke='#fff'
                  strokeLinejoin='round'
                  strokeWidth={5.03}
                  d='M117.08 148.869c-5.484 6.131-3.867 7.207-14.835 9.464c-11.096 2.285-4.57 6.356-.324 7.425c5.161 1.294 17.1 3.122 25.172-8.178c2.461-3.445-.014-8.929-3.389-10.321c-1.631-.675-3.811-1.519-6.609 1.617z'
                ></path>
                <path
                  stroke='#fff'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={5.03}
                  d='M116.722 148.763c-.563-3.607 1.181-7.889 3.044-12.909c2.799-7.523 9.254-15.047 4.093-38.932c-3.846-17.79-29.672-3.706-29.672-1.294s1.167 12.235-.422 23.66c-2.088 14.921 9.492 27.535 22.823 26.248'
                ></path>
                <path
                  fill='#fff'
                  stroke='#fff'
                  strokeWidth={1.68}
                  d='M110.577 95.27c-.12.822 1.511 3.023 3.628 3.318c2.116.296 3.923-1.42 4.043-2.25c.119-.83-1.512-1.73-3.628-2.025s-3.938.14-4.043.956Z'
                ></path>
                <path
                  fill='#fff'
                  stroke='#fff'
                  strokeWidth={0.84}
                  d='M175.011 93.59c.112.822-1.512 3.022-3.628 3.318c-2.117.295-3.938-1.42-4.043-2.25c-.106-.83 1.512-1.73 3.628-2.025s3.937.14 4.043.956Z'
                ></path>
                <path
                  stroke='#fff'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={5.03}
                  d='M182.577 87.887c.351 6.469-1.393 10.863-1.618 17.747c-.323 9.998 4.768 21.445-2.904 32.906'
                ></path>
              </g>
            </svg>
          </div>
          <div className='stack-content-box'>
            <p className='text-sm font-semibold text-gray-300'>PostgreSQL</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Stack
