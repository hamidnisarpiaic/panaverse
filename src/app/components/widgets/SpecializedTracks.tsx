"use client"
import React, { useEffect, useState } from 'react';
import Wrapper from '../shared/Wrapper';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import QuarterBox from '../shared/QuarterBox';
import Web3Img from '@/app/assets/images/meta.webp';
import AiImg from '@/app/assets/images/ai.webp';
import cloud from '@/app/assets/images/cloud.webp';
import amb from '@/app/assets/images/ambient.webp';
import geno from '@/app/assets/images/genomics.webp';
import net from '@/app/assets/images/network.webp';
import Image from 'next/image';
import Link from 'next/link';

interface Quarter {
  header: string;
  description: string;
  number: number;
}

interface Specialization {
  slug: string;
  header: string;
  description: string;
  image: StaticImageData;
  Quarters: Quarter[];
}

export const programsData: Specialization[] = [
  {
    slug: "wmd",
    header: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    description:
      'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
    image: Web3Img,
    Quarters: [
      {
        header: 'Quarter IV',
        description: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
        number: 4,
      },
      {
        header: 'Quarter V',
        description: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
        number: 5,
      },
    ],
  },
// next item ai
  {
    slug: "ai",
    header: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    description:
      'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
    image: AiImg,
    Quarters: [
      {
        header: 'Quarter IV',
        description: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
        number: 4,
      },
      {
        header: 'Quarter V',
        description: 'AI-361: Deep Learning and MLOps',
        number: 5,
      },
    ],
  },
// next item cloud
  {
    slug: "cloud",
    header: 'Cloud-Native Computing Specialization',
    description:
      'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
    image: cloud,
    Quarters: [
      {
        header: 'Quarter IV',
        description: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
        number: 4,
      },
      {
        header: 'Quarter V',
        description: 'CN-361: Developing Multi-Cloud Apps using CDK for Terraform',
        number: 5,
      },
    ],
  },
// next item ambient
  {
    slug: "amb",
    header: 'Ambient Computing and IoT Specialization',
    description:
      'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
    image: amb,
    Quarters: [
      {
        header: 'Quarter IV',
        description: 'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
        number: 4,
      },
      {
        header: 'Quarter V',
        description: 'AC-361: Embedded Programming using C and Rust',
        number: 5,
      },
    ],
  },
// next item genomics

  {
    slug: "geno",
    header: 'Genomics and Bioinformatics Specialization',
    description:
      'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
    image: geno,
    Quarters: [
      {
        header: 'Quarter IV',
        description: 'AI-351:Python for Biologists',
        number: 4,
      },
      {
        header: 'Quarter V',
        description: 'Bio-361: Bioinformatics with Python ',
        number: 5,
      },
    ],
  },
// next item network

  {
    slug: "net",
    header: 'Network Programmability and Automation Specialization',
    description:
      'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
    image: net,
    Quarters: [
      {
        header: 'Quarter IV',
        description: 'NPA-351: CCNA 200-301 Certification',
        number: 4,
      },
      {
        header: 'Quarter V',
        description: 'NPA-361: Network Programmability and Automation ',
        number: 5,
      },
    ],
  },
];
// coding
const SpecializedTracks: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string>("wmd");
  const selectedItemsData = programsData.find((item) => item.slug === selectedItems);

  useEffect(() => {
    console.log("selectedItems", selectedItemsData);
  }, [selectedItems]);

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-900 md:text-red-500 lg:text-blue-700 whitespace-pre-wrap">
            Specialized Track
          </h2>
          <p className="text-justify text-xl mt-6 text-slate-900 max-w-screen-sm">
            After completing the first three quarters, the participants will select one or two specializations consisting of two courses each.
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="basis-8/12">
            <div className="shadow-xl sticky top-60 self-start rounded-xl border border-slate-200 py-8 px-8">
              <h4 className="text-primary md:text-red-500 lg:text-blue-700 text-lg">Specialized Programme</h4>
              <h3 className="text-2xl font-semibold">{selectedItemsData?.header || ''}</h3>
              <p className="text-lg text-slate-600 mt-2 text-justify">{selectedItemsData?.description || ''}</p>
              <div className="flex items-center mt-4">
                <button className="text-teal-700 text-xl underline flex">
                <Link href={"/courses"}>
                Learn more
                        </Link>
                  
                  
                  
                  <ArrowRightIcon width="10" height="13" className="ml-1 mt-2" />
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {selectedItemsData?.Quarters.map((quarter, index) => (
                <QuarterBox key={index} header={quarter.header} description={quarter.description} number={quarter.number} haveborder={false} />
              ))}
            </div>
          </div>

          {/* Content Right */}
          <div className="basis-4/12 px-4 py-6 bg-slate-100">
            {programsData.map((item, i) => (
              <div key={item.slug} onClick={() => setSelectedItems(item.slug)} className="flex gap-x-3 gap-y-2 mb-3 items-center cursor-pointer">
                <div className="flex-shrink-0 h-24 w-36 hover:w-36 hover:scale-90">
                  <Image src={item.image} alt={item.header} className={'h-20 object-cover rounded-md'} />
                </div>
                <div>
                  <h4 className="text-primary font-medium">Specialized Program</h4>
                  <h3 className="font-bold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      

      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
