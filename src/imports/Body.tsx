import imgVerticalDivider from "figma:asset/5255198d0e15922e314dab624f5862246d5f6aeb.png";

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-[24.02px]">
        <p className="leading-[32px] whitespace-pre-wrap">settings_suggest</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[40px] z-[2]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }}>
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[20px] tracking-[-0.5px] w-[155.7px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[20px]">SHIMIZU</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#005eb8]">SHOKAI</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[9.6px] tracking-[1.92px] uppercase w-full">
        <p className="leading-[14.4px] whitespace-pre-wrap">Precision Machinery</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
      <Container4 />
      <Margin1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0 z-[1]" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Container">
      <BackgroundShadow />
      <Margin />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] pt-[8px] relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[59.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">Products</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[10px] pt-[8px] relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#005eb8] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[14px] w-[76.13px]">
        <p className="leading-[20px] whitespace-pre-wrap">Philosophy</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[40px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[10px] pt-[8px] relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[64.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">Company</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[40px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[10px] pt-[8px] relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-[53.66px]">
        <p className="leading-[20px] whitespace-pre-wrap">Support</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[40px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Link />
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] tracking-[0.6px] w-[45.78px]">
        <p className="leading-[16px] whitespace-pre-wrap">JP / EN</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Link" style={{ backgroundImage: "linear-gradient(135deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }}>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[75.08px]">
        <p className="leading-[20px] whitespace-pre-wrap">Contact Us</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Link:margin">
      <Link5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link4 />
      <LinkMargin3 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative w-full">
        <Container1 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] relative shrink-0 w-full z-[4]" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(0,94,184,0.1)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start pb-[25px] pt-[24px] px-[24px] relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative">
        <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[12px] tracking-[1.2px] uppercase w-[151.23px]">
          <p className="leading-[16px] whitespace-pre-wrap">Since 1985 — Tokyo</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(224,242,254,0.5)] content-stretch flex items-center left-0 px-[13px] py-[5px] rounded-[9999px] top-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,94,184,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-[#005eb8] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Margin2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[8px] right-0 top-[50px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[192px] justify-center leading-[96px] not-italic relative shrink-0 text-[#0f172a] text-[96px] tracking-[-2.4px] w-[453.3px] whitespace-pre-wrap">
        <p className="mb-0">Precision</p>
        <p className="bg-clip-text bg-gradient-to-r from-[#0b1f52] to-[#0099da] via-1/2 via-[#005eb8]" style={{ WebkitTextFillColor: "transparent" }}>
          in Motion.
        </p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[768px] pl-[28px] right-[37.33px] top-[320px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,94,184,0.2)] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[96px] justify-center leading-[32px] not-italic relative shrink-0 text-[#475569] text-[24px] w-[723.34px] whitespace-pre-wrap">
        <p className="mb-0">{`We don't just distribute components. We understand the torque,`}</p>
        <p className="mb-0">the load, and the lifecycle. We bridge the gap between Japanese</p>
        <p>craftsmanship and global engineering demands.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[416px] relative shrink-0 w-[805.33px]" data-name="Container">
      <OverlayBorder />
      <Heading />
      <div className="absolute h-[6px] left-0 rounded-[9999px] top-[274px] w-[128px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }} />
      <VerticalBorder />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[60px] text-[60px] text-white">
        <p className="leading-[60px] whitespace-pre-wrap">settings</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute content-stretch flex inset-[30%] items-center justify-center opacity-90 overflow-clip rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }}>
      <Container11 />
    </div>
  );
}

function BackgroundShadow2() {
  return <div className="-translate-x-1/2 absolute bg-[#0099da] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,153,218,0.5),0px_4px_6px_-4px_rgba(0,153,218,0.5)] size-[16px] top-[-8px]" data-name="Background+Shadow" />;
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[320px]" data-name="Container">
      <div className="absolute border-16 border-[#e0f2fe] border-solid inset-0 rounded-[9999px]" data-name="Border" />
      <div className="absolute border-2 border-[rgba(0,94,184,0.2)] border-dashed inset-[16px] rounded-[9999px]" data-name="Border" />
      <BackgroundShadow1 />
      <BackgroundShadow2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[378.67px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Section">
      <Container8 />
      <div className="flex flex-row items-center self-stretch">
        <Container9 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#005eb8] text-[36px] w-[36px]">
        <p className="leading-[40px] whitespace-pre-wrap">verified</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 right-[48px] top-0" data-name="Heading 2">
      <Margin3 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[30px] w-[288.7px]">
        <p className="leading-[36px] whitespace-pre-wrap">Technical Authority</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[48px] top-[72px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[144px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[18px] w-[505.53px] whitespace-pre-wrap">
        <p className="leading-[36px] mb-0">In the world of precision machinery, there is no margin for</p>
        <p className="leading-[36px] mb-0">error. As a specialized trading firm, our value lies not in</p>
        <p className="mb-0">
          <span className="leading-[36px]">{`inventory, but in `}</span>
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic text-[#005eb8]">insight</span>
          <span className="leading-[36px]">. We curate gears and transmission</span>
        </p>
        <p className="leading-[36px]">components that define the efficiency of your final product.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[48px] top-[240px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[144px] justify-center leading-[36px] not-italic relative shrink-0 text-[#475569] text-[18px] w-[516.25px] whitespace-pre-wrap">
        <p className="mb-0">Our engineers work directly with manufacturers to ensure</p>
        <p className="mb-0">specifications are met with micron-level accuracy. We</p>
        <p className="mb-0">believe that true reliability comes from a deep understanding</p>
        <p>of the mechanics behind every rotation.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading1 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-start pb-[9px] relative shrink-0" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[14px] tracking-[1.4px] uppercase w-[107.83px]">
        <p className="leading-[20px] whitespace-pre-wrap">Core Values</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#005eb8] text-[18px] w-[18px]">
        <p className="leading-[28px] whitespace-pre-wrap">precision_manufacturing</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e0f2fe] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pr-[16px] pt-[4px] relative shrink-0 w-[48px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[139.63px]">
        <p className="leading-[28px] whitespace-pre-wrap">Precision First</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[434.06px] whitespace-pre-wrap">
        <p className="mb-0">We prioritize accuracy over volume. Every component we trade is</p>
        <p>vetted for rigorous industrial standards.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[6.875px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container18 />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin4 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#005eb8] text-[18px] w-[18px]">
        <p className="leading-[28px] whitespace-pre-wrap">translate</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e0f2fe] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container19 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pr-[16px] pt-[4px] relative shrink-0 w-[48px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[208.58px]">
        <p className="leading-[28px] whitespace-pre-wrap">Engineering Dialogue</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[441.59px] whitespace-pre-wrap">
        <p className="mb-0">We speak your language. Our team consists of mechanical experts</p>
        <p>who can discuss specs, not just prices.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[6.875px] items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container21 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin5 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#005eb8] text-[18px] w-[18px]">
        <p className="leading-[28px] whitespace-pre-wrap">public</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e0f2fe] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container22 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pr-[16px] pt-[4px] relative shrink-0 w-[48px]" data-name="Margin">
      <Background2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[155.81px]">
        <p className="leading-[28px] whitespace-pre-wrap">Global Logistics</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[385.03px] whitespace-pre-wrap">
        <p className="mb-0">Seamless delivery networks connecting top-tier Japanese</p>
        <p>manufacturers with the world.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[6.875px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container24 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <Margin6 />
      <Container23 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pl-[48px] relative size-full">
        <Heading2 />
        <List />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex gap-[96px] items-start justify-center relative shrink-0 w-full" data-name="Section">
      <Container12 />
      <div className="-translate-x-1/2 absolute bottom-0 left-[calc(50%+0.5px)] top-0 w-px" data-name="Vertical Divider">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVerticalDivider} />
      </div>
      <Container15 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-50 right-[-40px] top-[-80px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold h-[240px] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[160px] tracking-[-8px] w-[401.94px]">
        <p className="leading-[240px] whitespace-pre-wrap">DATA</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative">
        <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[24px] w-[24.02px]">
          <p className="leading-[24px] whitespace-pre-wrap">business</p>
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pb-[17px] relative">
        <Margin7 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[24px] w-[194.86px]">
          <p className="leading-[32px] whitespace-pre-wrap">Company Profile</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Company Name</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">Shimizu Shokai Co., Ltd.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 pb-[24px] right-[876px] top-0" data-name="Container">
      <Container28 />
      <Container29 />
      <div className="absolute bg-[#e2e8f0] bottom-0 left-[-12px] top-0 w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Representative</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{`CEO & President`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[130.39px]">
        <p className="leading-[28px] whitespace-pre-wrap">Hiroshi Tanaka</p>
      </div>
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[292px] right-[584px] top-0" data-name="Container">
      <Container31 />
      <Container32 />
      <div className="absolute bg-[#e2e8f0] bottom-[-0.5px] left-[-12px] top-0 w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Established</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">April 12, 1985</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[584px] pb-[24px] right-[292px] top-0" data-name="Container">
      <Container35 />
      <Container36 />
      <div className="absolute bg-[#e2e8f0] bottom-0 left-[-12px] top-0 w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Capital</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px] whitespace-pre-wrap">¥100,000,000</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[876px] pb-[24px] right-0 top-0" data-name="Container">
      <Container38 />
      <Container39 />
      <div className="absolute bg-[#e2e8f0] bottom-0 left-[-12px] top-0 w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-[106.83px]">
        <p className="leading-[16px] whitespace-pre-wrap">Headquarters</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[215.86px]">
        <p className="leading-[28px] whitespace-pre-wrap">2-15-1 Konan, Minato-ku</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[56px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[177.55px]">
        <p className="leading-[24px] whitespace-pre-wrap">Tokyo 108-0075, Japan</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[104px] left-0 right-[584px] top-[124px]" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
      <div className="absolute bg-[#e2e8f0] bottom-0 left-[-12px] top-0 w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[16px] whitespace-pre-wrap">Business Activities</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[6px] items-start pr-[8px] relative shrink-0 w-[14px]" data-name="Margin">
      <div className="bg-[#005eb8] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[247.81px]">
        <p className="leading-[24px] whitespace-pre-wrap">Export/Import of Precision Gears</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col h-[6px] items-start pr-[8px] relative shrink-0 w-[14px]" data-name="Margin">
      <div className="bg-[#005eb8] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[292.13px]">
        <p className="leading-[24px] whitespace-pre-wrap">Industrial Machinery Component Sales</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col h-[6px] items-start pr-[8px] relative shrink-0 w-[14px]" data-name="Margin">
      <div className="bg-[#005eb8] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Item">
      <Margin10 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[16px] w-[357.3px]">
        <p className="leading-[24px] whitespace-pre-wrap">Technical Consulting for Transmission Systems</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[584px] right-0 top-[124px]" data-name="Container">
      <Container45 />
      <List1 />
      <div className="absolute bg-[#e2e8f0] bottom-0 left-[-12px] top-0 w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[228px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container27 />
        <Container30 />
        <Container34 />
        <Container37 />
        <Container40 />
        <Container44 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+HorizontalBorder+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-[48px] pt-[52px] px-[48px] relative w-full">
          <Heading6 />
          <div className="absolute right-[-32px] rounded-bl-[9999px] size-[128px] top-[-28px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(135deg, rgba(224, 242, 254, 0.3) 0%, rgba(224, 242, 254, 0) 100%)" }} />
          <Container26 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#005eb8] border-solid border-t-4 inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(226,232,240,0.5),0px_8px_10px_-6px_rgba(226,232,240,0.5)]" />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section">
      <Container25 />
      <BackgroundHorizontalBorderShadow />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[30px] w-[107.19px]">
          <p className="leading-[36px] whitespace-pre-wrap">History</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Liberation_Mono:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[84.02px]">
          <p className="leading-[20px] whitespace-pre-wrap">Milestones</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-end justify-between pb-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Heading7 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-80 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#005eb8] text-[24px] w-[57.61px]">
        <p className="leading-[32px] whitespace-pre-wrap">1985</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[84px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[172.81px]">
        <p className="leading-[28px] whitespace-pre-wrap">Founded in Ota City</p>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="absolute border-[rgba(0,94,184,0.2)] border-l-2 border-solid h-[45.5px] left-0 right-0 top-[120px]" data-name="VerticalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] left-[12px] not-italic text-[#475569] text-[14px] top-[21.88px] w-[251.52px] whitespace-pre-wrap">
        <p className="mb-0">Started as a specialized distributor for</p>
        <p>small module gears.</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] h-[188.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container48 />
        <Heading8 />
        <VerticalBorder1 />
        <div className="absolute bg-[#f1f5f9] border-4 border-[#cbd5e1] border-solid left-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[-9px]" data-name="Background+Border+Shadow" />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[24px] w-[57.61px]">
        <p className="leading-[32px] whitespace-pre-wrap">1998</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[84px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[152.3px]">
        <p className="leading-[28px] whitespace-pre-wrap">Global Expansion</p>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid h-[68.25px] left-0 right-0 top-[120px]" data-name="VerticalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] left-[12px] not-italic text-[#475569] text-[14px] top-[33.25px] w-[227.16px] whitespace-pre-wrap">
        <p className="mb-0">Established first overseas office in</p>
        <p className="mb-0">Dusseldorf, Germany to serve EU</p>
        <p>markets.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] h-[188.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
        <Heading9 />
        <VerticalBorder2 />
        <div className="absolute bg-[#f1f5f9] border-4 border-[#cbd5e1] border-solid left-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[-9px]" data-name="Background+Border+Shadow" />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[24px] w-[57.61px]">
        <p className="leading-[32px] whitespace-pre-wrap">2010</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[84px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[160.42px]">
        <p className="leading-[28px] whitespace-pre-wrap">ISO 9001 Certified</p>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid h-[68.25px] left-0 right-0 top-[120px]" data-name="VerticalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] left-[12px] not-italic text-[#475569] text-[14px] top-[33.25px] w-[212.47px] whitespace-pre-wrap">
        <p className="mb-0">Solidified commitment to quality</p>
        <p className="mb-0">management systems across all</p>
        <p>divisions.</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex-[1_0_0] h-[188.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container52 />
        <Heading10 />
        <VerticalBorder3 />
        <div className="absolute bg-[#f1f5f9] border-4 border-[#cbd5e1] border-solid left-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[-9px]" data-name="Background+Border+Shadow" />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Liberation_Mono:Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[24px] w-[57.61px]">
        <p className="leading-[32px] whitespace-pre-wrap">2023</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[84px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[156.56px]">
        <p className="leading-[28px] whitespace-pre-wrap">New HQ in Minato</p>
      </div>
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div className="absolute border-[rgba(0,0,0,0)] border-l-2 border-solid h-[68.25px] left-0 right-0 top-[120px]" data-name="VerticalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[22.75px] left-[12px] not-italic text-[#475569] text-[14px] top-[33.25px] w-[249.91px] whitespace-pre-wrap">
        <p className="mb-0">Moved to a larger facility to</p>
        <p className="mb-0">accommodate expanding engineering</p>
        <p>support teams.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex-[1_0_0] h-[188.25px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container54 />
        <Heading11 />
        <VerticalBorder4 />
        <div className="absolute bg-[#f1f5f9] border-4 border-[#cbd5e1] border-solid left-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[16px] top-[-9px]" data-name="Background+Border+Shadow" />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center pt-[2px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container47 />
      <Container49 />
      <Container51 />
      <Container53 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Section">
      <HorizontalBorder />
      <HorizontalBorder1 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-start justify-center p-[12px] relative rounded-[9999px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-[30px]">
        <p className="leading-[36px] whitespace-pre-wrap">folder_zip</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-0.9px] w-[453.16px]">
        <p className="leading-[40px] whitespace-pre-wrap">Looking for specifications?</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#e0f2fe] text-[18px] text-center w-[590.12px] whitespace-pre-wrap">
        <p className="mb-0">Access our detailed corporate profile and component catalog. Ideal for</p>
        <p>engineers needing quick reference on our capabilities.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Icons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#005eb8] text-[24px] text-center">
        <p className="leading-[24px] whitespace-pre-wrap">download</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative">
        <Container58 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[33px] py-[17px] relative rounded-[inherit]">
        <Margin11 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[16px] text-center w-[200.86px]">
          <p className="leading-[24px] whitespace-pre-wrap">Download Brochure (PDF)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[2px] content-stretch flex items-center justify-center px-[33px] py-[17px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[206.84px]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact Engineering Team</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container55() {
  return (
    <div className="max-w-[896px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[inherit] px-[16px] relative w-full">
          <OverlayOverlayBlur />
          <Heading12 />
          <Container56 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Section" style={{ backgroundImage: "linear-gradient(160.76deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[168px] py-[64px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0.05)] blur-[32px] right-[-128px] rounded-[9999px] size-[384px] top-[-128px]" data-name="Overlay+Blur" />
          <div className="absolute bg-[rgba(0,153,218,0.2)] blur-[20px] bottom-[-85.33px] left-[-85.33px] rounded-[9999px] size-[256px]" data-name="Overlay+Blur" />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full z-[3]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[128px] items-start max-w-[inherit] px-[24px] py-[96px] relative w-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Material_Symbols_Outlined:Thin',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[18px]">
        <p className="leading-[28px] whitespace-pre-wrap">settings_suggest</p>
      </div>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 size-[32px]" data-name="Background+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }}>
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.45px] w-[141.94px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[18px]">SHIMIZU</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic text-[#005eb8]">SHOKAI</span>
        </p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container65 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <Container64 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow3 />
      <Margin12 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Bridging innovation and mechanics</p>
        <p>since 1985.</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container62 />
      <Container66 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Sitemap</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Home</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Philosophy</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Products</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">News</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading13 />
      <List2 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Legal</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Terms of Service</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Commercial Transactions</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading14 />
      <List3 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b1f52] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Office</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[14px] w-full">
        <p className="leading-[22.75px] whitespace-pre-wrap">+81 3-1234-5678</p>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col gap-[11.625px] items-start relative shrink-0 w-full" data-name="Address">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#475569] text-[14px] w-[162.09px] whitespace-pre-wrap">
        <p className="mb-0">2-15-1 Konan, Minato-ku</p>
        <p>Tokyo 108-0075, Japan</p>
      </div>
      <Container70 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[18.875px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading15 />
      <Address />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[297.59px]">
          <p className="leading-[16px] whitespace-pre-wrap">© 2023 Shimizu Shokai Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[64.37px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[24px]">Linked</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic">In</span>
        </p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <Link6 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container59() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container60 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start pb-[32px] pt-[65px] relative shrink-0 w-full z-[2]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute inset-0 overflow-clip z-[1]" data-name="Container">
      <div className="absolute blur-[32px] opacity-3 right-[-128px] rounded-[9999px] size-[640px] top-[-464.84px]" data-name="Gradient+Blur" style={{ backgroundImage: "linear-gradient(135deg, rgb(11, 31, 82) 0%, rgb(0, 94, 184) 100%)" }} />
      <div className="absolute border border-[rgba(0,94,184,0.2)] border-solid bottom-[-309.89px] left-[-128px] opacity-40 rounded-[9999px] size-[576px]" data-name="Border" />
      <div className="absolute border border-[rgba(11,31,82,0.2)] border-dashed bottom-[-371.88px] left-[-153.59px] opacity-30 rounded-[9999px] size-[512px]" data-name="Border" />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col isolate items-start pb-[8.25px] relative size-full" data-name="Body">
      <Nav />
      <Main />
      <Footer />
      <Container73 />
    </div>
  );
}