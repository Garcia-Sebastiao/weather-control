import Image from "next/image";

type WeatherCardProps = {
  icon: any;
  time: string;
  temperature: number;
};

export default function WeatherCard(props: WeatherCardProps) {
  return (
    <div className="flex flex-col items-center bg-[#2566A320] border-[#2566A3] border-[1px] flex-1 rounded-3xl px-3 py-6 gap-4">
      <span className="text-white text-xl">{props.temperature}°</span>
      <Image className="w-8" src={props.icon} alt="" />
      <span className="text-white text-xl">{props.time}</span>
    </div>
  );
}
