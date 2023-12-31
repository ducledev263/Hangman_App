const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    style={{
      height: "110px",
      width: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "110px",
      right: 0,
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "90px",
      backgroundColor: "black",
      position: "absolute",
      top: "130px",
      right: "-80px",
      rotate: "30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
    <div
      style={{
        height: "10px",
        width: "90px",
        backgroundColor: "black",
        position: "absolute",
        top: "130px",
        right: 0,
        rotate: "-30deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const RIGHT_LEG = (
    <div
      style={{
        height: "10px",
        width: "90px",
        backgroundColor: "black",
        position: "absolute",
        top: "210px",
        right: "-80px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_LEG = (
    <div
      style={{
        height: "10px",
        width: "90px",
        backgroundColor: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const BODY_PART = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

  type HangmanDrawingProps = {
    numberOfWrongGuesses: number;
  }

export function HangmanDrawing({ numberOfWrongGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PART.slice(0, numberOfWrongGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "225px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      />
    </div>
  );
}
