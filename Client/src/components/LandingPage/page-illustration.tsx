import Illustration from "/images/page-illustration.svg";
import BlurredShapeGray from "/images/blurred-shape-gray.svg";
import BlurredShape from "/images/blurred-shape.svg";

export default function PageIllustration({ multiple = false }) {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/4"
        aria-hidden="true"
      >
        <img
          className="max-w-none"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 -translate-x-full opacity-50"
            aria-hidden="true"
          >
            <img
              className="max-w-none"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 -translate-x-1/3"
            aria-hidden="true"
          >
            <img
              className="max-w-none"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}