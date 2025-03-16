import Image from 'next/image';
import { Dialog } from 'radix-ui';
import { getYearMonth } from './utils';
import { projects } from './projects';

export function ProjectContent(props: { index?: number }) {
  if (props.index == undefined) {
    return <></>;
  }

  const project = projects[props.index];
  const data = project.dialogConent;

  if (data == undefined) {
    return <></>;
  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-[240px_auto] md:gap-x-8 md:gap-y-10">
      <div className="flex justify-start items-center relative gap-2 pb-2 border-b border-black">
        <Dialog.Title className="flex-grow-0 flex-shrink-0 text-[20px] font-bold text-[#111]">
          {project.name}
        </Dialog.Title>
        <Dialog.Description className="flex-grow-0 flex-shrink-0 text-[16px] font-semibold text-[#111]">
          {project.company}
        </Dialog.Description>
      </div>
      <div className="hidden md:block border-b border-black" />
      <div className="flex flex-col items-start relative">
        <div className="hidden md:block aspect-w-3 aspect-h-2 w-full">
          <Image
            src={project.image_url}
            alt={`${project.name} 로고`}
            width={240}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-[14px] text-left text-[#876f6f] md:pt-4 pt-3">
          {getYearMonth(data.duration.start)} -{' '}
          {getYearMonth(data.duration.end)}
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <p className="text-[18px] font-semibold text-left text-[#111]">
          {project.description}
        </p>
        <div className="flex flex-col justify-start items-start relative gap-5">
          {data.descriptions.map((description, index) => {
            return (
              <div key={index} className="text-sm text-left text-[#444]">
                <p className="font-semibold">{description.subheading}</p>
                <ul className="list-disc list-outside pl-5">
                  {description.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
