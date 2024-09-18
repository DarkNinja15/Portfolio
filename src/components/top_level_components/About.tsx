function About() {
    return <>
        <div className="mt-4">
            <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">About Me:</h2>
            <p className="mt-5 font-normal text-lg leading-relaxed">
                Hello, I am Animesh Shukla, a B.Tech student from the Indian Institute of Information Technology, Bhagalpur, part of the 2021-2025 batch. I completed my high school at HP Children's Academy and my Senior Secondary at Oxford Public School, Gorakhpur.
            </p>
            <p className="mt-5 font-normal text-lg leading-relaxed">
                I love to play chess and badminton, which are my favorite hobbies. I also enjoy spending time learning new tech stacks and exploring the latest trends in technology.
            </p>
            {/* <div className="flex justify-center mt-4">
                <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" />
            </div> */}
            <h2 className="text-4xl mt-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Leetcard:</h2>
            <p className="alignItems: 'center', flex justify-around pt-6 pb-6">
                <a href="https://leetcode.com/evilshadow01/" target="_blank"><img className="alignItems: 'center'," src="https://assets.leetcode.com/static_assets/marketing/2023.gif" alt="jyot" height="200" width="200" /></a>
                <a href="https://leetcode.com/evilshadow01/" target="_blank"><img className="alignItems: 'center'," src="https://assets.leetcode.com/static_assets/marketing/2024-200.gif" alt="jyot" height="200" width="200" /></a>
                <a href="https://leetcode.com/evilshadow01/" target="_blank"><img className="alignItems: 'center'," src="https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif" alt="jyot" height="200" width="200" /></a>
            </p>
            <div className="flex justify-center">
                <img src="https://leetcard.jacoblin.cool/evilshadow01?theme=dark&font=Nunito&ext=heatmap" />
            </div>
            {/* <div className="flex justify-center mt-4">
                <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" />
            </div> */}
            <h2 className="text-4xl mt-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Badges:</h2>
            <div className="flex justify-center gap-x-32">
                <div className="w-1/4 flex flex-col items-center">
                    <img className="pt-6" src="https://github.githubassets.com/assets/starstruck-default-b6610abad518.png" />
                    <h1 className="mt-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Starstruck</h1>
                </div>
                <div className="w-1/4 flex flex-col items-center">
                    <img className="pt-6" src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" />
                    <h1 className="mt-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">QuickDraw</h1>
                </div>
            </div>
            <div className="flex justify-center gap-x-32">
                <div className="w-1/4 flex flex-col items-center">
                    <img className="pt-6" src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" />
                    <h1 className="mt-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Yolo</h1>
                </div>

                <div className="w-1/4 flex flex-col items-center">
                    <img className="pt-6" src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" />
                    <h1 className="mt-2 text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-[#EECFCC] to-fuchsia-400">Pullshark</h1>
                </div>
            </div>
            <div className="pt-20"></div>
        </div>
    </>;
}

export default About;
