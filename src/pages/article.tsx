import React from "react";
import { MainLayout } from "../components/MainLayout";
import { CodeBlock } from "../components/CodeBlock";
import { BasicSpring } from "../canvas/BasicSpring";
import { StepByStepLinear } from "../canvas/StepByStepLinear";
import { StepByStepMove } from "../canvas/StepByStepMove";
import { LinearCurve } from "../canvas/LinearCurve";
import { EasingCurve } from "../canvas/EasingCurve";
import { DampingRatioToOne } from "../canvas/DampingRatioToOne";
import { AngularFrequency } from "../canvas/AngularFrequency";
import { Config } from "../canvas/Config";
import Head from "next/head";
import { MenuNoAnim } from "../components/MenuNoAnim";
import { MenuAnimBasic } from "../components/MenuAnimBasic";
import { MenuAnimKeepPos } from "../components/MenuAnimKeepPos";
import { FollowMouseNoVelocity } from "../canvas/FollowMouseNoVelocity";
import { FollowMouseSmooth } from "../canvas/FollowMouseSmooth";
import Link from "next/link";

export default function Article(): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>Humpf - Using Damped Springs for animations</title>
        <meta
          name="twitter:title"
          content="Humpf - Using Damped Springs for animations"
        />
      </Head>
      <MainLayout currentPage="article" key="main">
        <h1>Using Damped Springs for animations</h1>
        <p className="Hero">
          <em>Humpf</em> is a <em>TypeScript</em> and <em>JavaScript</em>{" "}
          library to get the <em>position and velocity</em> of a{" "}
          <em>damped spring</em> as a <em>continuous function of time</em>.
        </p>
        <blockquote>
          A <i>what</i> of <i>what</i> ?
        </blockquote>
        <p>
          The aim of this article is to explain the different terms in the
          sentence above to give you a better understanding of the library and
          how to use it.
        </p>
        <p>
          Let&apos;s start by the most important part: what is a{" "}
          <em>damped spring</em> ?
        </p>
        <h2>What is a damped spring ?</h2>
        <p>
          A{" "}
          <a href="http://www.ryanjuckett.com/programming/damped-springs/">
            Damped Spring
          </a>{" "}
          is an equation that simulate the movement of a spring where the
          amplitude of the spring (the bounce) is damped over time.
        </p>
        <p>Here is an example of this movement</p>
        <BasicSpring />
        <p>
          Before diving into how to configure and use such movement, let&apos;s
          see what a &quot;<em>continuous function of time</em>&quot; means.
        </p>
        <h2>Step-by-step vs Continuous function of time</h2>
        <p>There are two main ways to animate motion:</p>
        <ul>
          <li>Using a step-by-step aproach</li>
          <li>Using a continuous function of time</li>
        </ul>
        <h3>The step-by-step aproach</h3>
        <p>
          To animate the position of an object with a step-by-step approach, you
          first define the initial value, then on every frame you update this
          value:
        </p>
        <CodeBlock
          code={`
          let position = 0;
          // on each frame move by 5 pixels
          position = position + 5;
        `}
        />
        <StepByStepLinear />
        <p>
          This aproach is quite powerful and can be used to simulate physics:
        </p>
        <CodeBlock
          code={`
          let acceleration = 0.1;
          let velocity = -4;
          let position = 0;
          // on each frame
          velocity = velocity + acceleration;
          position = position + velocity;
        `}
        />
        <StepByStepMove />
        <p>
          This method is used by many frameworks and libraries out there but
          it&apos;s not the method used by <em>Humpf</em>.
        </p>
        <p>
          With <em>Humpf</em> your motion is represented as a continuous
          function of time, let&apos;s see what it means.
        </p>
        <h2>Continuous function of time</h2>
        <p>
          A continuous function is a function where the output is continuous
          meaning it has no abrupt changes or hole.
        </p>
        <p>
          In the case of <em>Humpf</em>, there are actually two outputs:{" "}
          <code>position</code> and <code>velocity</code> but we will only focus
          on <code>position</code> for now.
        </p>
        <p>
          To illustrate this, here is a very simple continuous function of time
          that just return the time scaled by a factor <code>y</code>:
        </p>
        <CodeBlock
          code={`
          const y = 30;

          function position(t: number): number {
            return t * y;
          }
        `}
        />
        <LinearCurve />
        <p>
          As you can see, this motion is pretty boring and does not feal very
          realistic...
        </p>
        <p>
          To make things a bit more interesting we can use easing functions.
        </p>
        <h2>Easing functions</h2>
        <p>
          <a href="https://easings.net">Easing functions</a> are small functions
          that take a parameter <code>t</code> (for time) and return a position.
          You&apos;ve probably already seen or even used one like{" "}
          <code>easeOutCubic</code>, <code>easeInOutQuad</code>, or{" "}
          <code>easeOutBounce</code>
        </p>
        <p>
          Here is what <code>easeInOutCubic</code> look like:
        </p>
        <CodeBlock
          code={`
          function position(t: number): number {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          }
        `}
        />
        <p className="Note">
          In easing functions, time is expected to be between <code>0</code> and{" "}
          <code>1</code>, same for the output.
        </p>
        <EasingCurve />
        <p>As you can see, this motion is much nicer than the linear one !</p>
        <p>
          But working with easing functions can be a bit tricky, you basically
          have to chose the one that best fit your need and roll with it.
        </p>
        <p>
          What if instead of an arbitrary math function we could use a physic
          based equation to animate our ball ? Well that&apos;s where{" "}
          <em>Damped Springs</em> come into play !
        </p>
        <h2>Damped Springs</h2>
        <p>At this point you might be wondering:</p>
        <p className="Note">
          How a spring could correctly model motion on a screen ? Most of the
          time I just want to move things from one position to another, not
          bounce around.
        </p>
        <p>
          This is a good point, in fact simple spring equation would be pretty
          useless but here we are talking about <em>damped</em> springs and that
          make all the difference.
        </p>
        <h3>Damping Ratio</h3>
        <p>
          Unlike a simple spring, a damped spring depend on a{" "}
          <em>damping ratio</em>. This number express how hard it is for the
          object to move.
        </p>
        <p>
          Now watch what how the curve evolve when the damping ratio approach{" "}
          <code>1</code>
        </p>
        <DampingRatioToOne />
        <p>
          As you can see, it looks less and less like a spring and more like
          what we had with the <code>easeInOutCubic</code>. The main difference
          is that this time the curve is define by our spring equation !
        </p>
        <p className="Note">
          This is nice but a bit slow. Can we make it faster ?
        </p>
        <p>
          Yes, and for that we need a new parameter: <em>Angular Frequency</em>
        </p>
        <h3>Angular Frequency</h3>
        <p>
          The angular frenquency is the frequency at which the spring goes back
          and forth. The easiest way to visualize this is with a spring with a{" "}
          <em>damping ratio</em> of <code>0</code>.
        </p>
        <AngularFrequency />
        <p>
          Note that here, because the <em>damping ratio</em> is <code>0</code>,
          the spring will bounce forever.
        </p>
        <p>Now let&apos;s combine the two !</p>
        <h3>Angular Frequency & Damping Ratio</h3>
        <Config showCode={false} />
        <h2>Updating a Spring</h2>
        <p>
          So far we have seen how a damped spring motion can be used to animate
          a nice realistic motion but in real cases motions are rarely just from
          A to B.
        </p>
        <p>
          Take the example of a menu the user can show / hide with a button.
        </p>
        <MenuNoAnim />
        <p>
          Let&apos;s animate this using a spring ! When it&apos;s closed we
          animate from closed to open, when it&apos;s open we animate from open
          to close.
        </p>
        <MenuAnimBasic />
        <p>
          <a
            href="https://codesandbox.io/s/menu-basic-anim-y9oyv?file=/src/index.js"
            target="_blank"
            rel="noreferrer"
          >
            Open in CodeSandbox
          </a>
        </p>
        <p>
          Now if you try to rapidly click multiple time on the button you will
          see a problem: we did not handle the case where the user click while
          the menu is moving.
        </p>
        <p>
          We can fix this by using the current position of the spring when the
          user clicks:
        </p>
        <CodeBlock
          code={`
            // when the user click on the button
            // we update the equilibrium but keep the current position
            spring = Spring({
              timeStart: Date.now(),
              position: spring(Date.now()).pos,
              equilibrium: menuHiddenOffset
            });
          `}
        />
        <p>Take a look at the result:</p>
        <MenuAnimKeepPos />
        <p>
          <a
            href="https://codesandbox.io/s/menu-basic-anim-keep-pos-uwyws?file=/src/index.js"
            target="_blank"
            rel="noreferrer"
          >
            Open in CodeSandbox
          </a>
        </p>
        <h2>Smooth transitions with velocity</h2>
        <p>
          There is one last thing we have to take into account when updating a
          spring: <code>velocity</code> !
        </p>
        <p>
          In the following example, we want the ball to be &quot;attracted&quot;
          to the cursor. To do so, everytime the cursor moves we update the
          spring&apos;s <code>equilibrium</code> to be the new position as well
          as <code>position</code> to make sure the ball starts from where it
          is.
        </p>
        <FollowMouseNoVelocity />
        <p>
          At first look it might look like it prefectly work but look what
          happend when you move the cursor. Do you see how the ball seems to be
          stuck while the cursor is moving ?
        </p>
        <p>
          This is because everytime we update the spring, we also reset the
          velocity (the speed) of the ball because the initial velocity of a
          spring is <code>0</code> by default.
        </p>
        <p>
          But in the real world, the velocity of an object can&apos;t suddently
          go from a value to <code>0</code>
        </p>
        <p>
          To fix this we need to preserve velocity when whe update the spring:
        </p>
        <CodeBlock
          code={`
            // when the user click on the button
            // we update the equilibrium but keep the current position and velocity
            spring = Spring({
              timeStart: Date.now(),
              position: spring(Date.now()).pos,
              velocity: spring(Date.now()).vel,
              equilibrium: menuHiddenOffset
            });
          `}
        />
        <p>And here the final result:</p>
        <FollowMouseSmooth />
        <h2>That&apos;s it</h2>
        <p>
          Congrats ! You now know how springs works. To go further take a look
          at{" "}
          <Link href="/api-doc">
            <a>the API</a>
          </Link>
          .
        </p>
      </MainLayout>
    </React.Fragment>
  );
}
