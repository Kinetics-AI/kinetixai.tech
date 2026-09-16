__Documentation__

<a id="heading_0"></a>__KAI Hand  
Product Manual and Open Ecosystem__

Navigation: 

Product Overview 

Hardware

Software and Development 

User Information 

After\-Sales Policy

<a id="heading_1"></a>__Product Overview__

<a id="heading_2"></a>__Overview__

KAI Hand is a next\-generation, highly dexterous and anthropomorphic robotic hand developed by Kinetix AI, featuring a hybrid direct\-driven and tendon\-driven actuation architecture\. It offers passive compliance, thermally balanced design, and modular construction\. Engineered specifically for embodied intelligence, it delivers manipulation capabilities approaching those of the human hand\.

![](/uploads/images/khand-en/en-1.png)

<a id="heading_3"></a>__Core Capabilities __

- __高自由度与高拟人度__：低成本迁移人类手部动作
- __被动柔顺设计__：丝滑的操作体验，无惧操作碰撞
- __力热平衡设计__：支持长程握持操作，单指出力20N\+，提升电机寿命
- __模块化设计__：可维护性高，支持用户自行替换手指
- __多模态感知__：视觉\+触觉感知系统，适配多种开源数据集，提供接近人脑的决策空间
- __High DoF and High Anthropomorphism：__Human\-like kinematics simplify motion retargeting and human\-to\-robot data transfer\.
- __Passive Compliance Design: __Superior Operational Experience，Reliable Under Collision
- __Thermal\-balanced design: __Self\-locking transmission supports sustained grasps while reducing heat and extending actuator life\.
- __Modular design__: User\-replaceable fingers simplify maintenance and reduce downtime\.
- __Multimodal Perception:__ An integrated vision and tactile sensing system supports open\-source datasets and enables more informed decision\-making\.

<a id="heading_4"></a>__Product Specifications__

__Parameter__

__Value / Description__

Weight

750 g

Dimensions

185 × 90 × 40 mm

Degrees of freedom

20 active DoF, 4 per finger; 

1 passive DoF at the thumb distal joint; 

16 compliant DoF—4 in the thumb and 3 in each remaining finger

Positioning repeatability

±1 mm

Drive architecture

Hybrid direct and tendon actuation with unidirectional self\-locking

control

Field\-oriented control \(FOC\)

Fingertip grip force

30N

Dynamic load per finger

2 kg

Communication  protocols

Up to 500 HzCAN, CAN FD, RS\-485, EtherCAT

Communication rate

Up to 500 Hz

Standard sensing

Fingertip tactile sensing

Optional sensing

Wrist\-mounted stereo depth camera

Operating voltage

12V; wide\-input supported

<a id="heading_5"></a>__Package Contents __

__Category__

__Item__

__Description__

Main unit

KAI Hand dexterous hand

Left hand, right hand, or pair, as specified in the purchase contract\.

Power and communication

Power adapter and AC cable

Power supply for KAI Hand\.

Power and communication

Communication harness and USB\-to\-CAN FD adapter

Connection to the host computer\.

Protective packaging

Foam insert and shipping case

Protection during shipment and return service\.

Mounting and tools

Debug stand, mounting screws, installation tools

For connecting KAI Hand to the customer system\.

Optional spares

Finger spares under the KCare service package

Left\-, right\-, or dual\-hand kits and harnesses; quantity and model per contract\.

Optional perception

Stereo depth camera and 3D\-printed bracket

Provides image and depth data\.

Optional perception

Fingertip visual–tactile sensors

Provides fingertip visual–tactile data\.

Optional perception

Palm tactile sensor

Provides palm contact data\.

Optional perception

Palm camera

Provides palm\-view image data\.

<a id="heading_6"></a>__Hardware__

![](/uploads/images/khand-en/en-2.png)

![](/uploads/images/khand-en/en-3.png)

<a id="heading_7"></a>__Mechanical Structure __

<a id="heading_8"></a>__Degrees of Freedom and Joint Definitions__

<a id="heading_9"></a>__DoF Definition__

KAI Hand has 21 kinematic degrees of freedom: 20 active DoF and one passive DoF\. It also incorporates 16 compliant DoF—three in each of the four fingers and four in the thumb\.

<a id="heading_10"></a>__Joint Definitions__

__Finger__

__Joint name__

__Control index__

__Definition__

Thumb

thumb\_cmc\_1

0

Active\. Axis remains normal to the palm\. Positive motion closes toward the first web space; external force can drive the joint in the positive direction through its compliant mechanism\.

thumb\_cmc\_2

1

Active\. Axis remains parallel to the palm\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

thumb\_mcp\_1

2

Active\. Positive motion closes toward the first web space; compliant under external force in the positive direction\.

thumb\_mcp\_2

3

Active\. Positive motion closes toward the first web space; compliant under external force in the positive direction\.

thumb\_dip

—

Passive and coupled to thumb\_mcp\_2; compliant under external force in the positive direction\.

Index

index\_mcp\_roll

4

Active\. Positive motion is toward the thumb; compliant under external force in the negative direction\.

index\_mcp\_pitch

5

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

index\_pip

6

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

index\_dip

7

Active tendon\-driven joint\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

Middle

middle\_mcp\_roll

8

Active\. Positive motion is toward the thumb; compliant under external force in the negative direction\.

middle\_mcp\_pitch

9

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

middle\_pip

10

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

middle\_dip

11

Active tendon\-driven joint\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

Ring

ring\_mcp\_roll

12

Active\. Positive motion is toward the thumb; compliant under external force in the positive direction\.

ring\_mcp\_pitch

13

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

ring\_pip

14

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

ring\_dip

15

Active tendon\-driven joint\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

Little

pinky\_mcp\_roll

16

Active\. Positive motion is toward the thumb; compliant under external force in the positive direction\.

pinky\_mcp\_pitch

17

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

pinky\_pip

18

Active\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

pinky\_dip

19

Active tendon\-driven joint\. Positive motion closes toward the palm; compliant under external force in the positive direction\.

<a id="heading_11"></a>__Thermal\-Balanced Design __

All joints except the four tendon\-driven distal joints—index\_dip, middle\_dip, ring\_dip, and pinky\_dip—use worm\-gear transmission\. When KAI Hand maintains a grasp, the transmission mechanically holds contact force instead of requiring continuous motor stall torque\. This substantially reduces actuator heating during sustained grasps and helps extend actuator service life\.

<a id="heading_12"></a>__Multimodal Sensing__

<a id="heading_13"></a>__Joint Position Sensing__

Joint\-angle sensors measure position changes caused by both commanded motion and externally induced compliant motion\.

<a id="heading_14"></a>__Tactile Sensing__

__Parameter__

__Specification__

Minimum detectable force

≤ 0\.05 N

Measurement range

0–20 N

Permissible overload

≥ 250% of calibrated full scale（50 N）

Force resolution

≤ 0\.1 N

Sensing points

Thumb: 44; index finger: 58

Update rate

100 Hz

Nonlinearity error

≤ ±0\.5% FS

Repeatability error

≤ ±1% FS

Drift

≤ 1% FS/hour; ≤ 0\.5% FS/°C

Hysteresis

≤ ±1% FS

Noise

RMS ≤ 0\.2% FS

Sensor\-element life

1,000,000 cycles

<a id="heading_15"></a>__Vision Sensing__

KAI Hand can be equipped with an optional wrist\-mounted stereo depth camera\. The currently specified model is the Orbbec Gemini 305\.

![](/uploads/images/khand-en/en-4.png)

<a id="heading_16"></a>__Electrical and Communication Interfaces__

<a id="heading_17"></a>__电气与通信接口__

<a id="heading_18"></a>__Power Connection__

KAI Hand is powered through the red and black power wires, which connect to the supplied power adapter via an XT30 connector\. The connector pinout is as follows:

![](/uploads/images/khand-en/en-5.jpg)

__点击图片可查看完整电子表格__

<a id="heading_19"></a>__CAN and CAN FD Communication__

The communication board provides a standard 2\-pin CAN interface\. Connect KAI Hand to the host computer using the supplied communication harness and USB\-to\-CAN FD adapter\. The connector pinout is as follows:

![](/uploads/images/khand-en/en-6.jpg)

__点击图片可查看完整电子表格__

![](/uploads/images/khand-en/en-7.png)

图片位置改动\+增加图示说明：Wiring Diagram

<a id="heading_20"></a>__Power Requirements__

Supply voltage: 12 V DC\. Maximum current: 20 A\. Support for 12–48 V wide\-input operation is planned\.

<a id="heading_21"></a>__Communication__

CAN and CAN FD are currently supported\. RS\-485 and EtherCAT support is planned\.

<a id="heading_22"></a>

<a id="heading_23"></a>__Status Indicators（这一部分先删除，中英文都是）__

![](/uploads/images/khand-en/en-8.png)

<a id="heading_24"></a>__System Integration__

<a id="heading_25"></a>__Mechanical Integration__

Design an adapter based on the wrist\-mount drawing\. Fasten KAI Hand to the adapter with M3 screws, then connect the adapter to the target robot or test fixture\. 

图示说明：Refer to the model repository for the 3D files\.

<a id="heading_26"></a>__Wrist Vision Integration__

If a wrist vision sensor is required, design an adapter with an integrated camera bracket\. Fasten both KAI Hand and the vision sensor to the adapter, then mount the assembly to the target system\.

<a id="heading_27"></a>__Integration Safety__

- Never install or remove mechanical or electrical connections while power is applied\.
- Before starting an integrated system, verify that every mechanical and electrical connection is secure\.
- When fastening KAI Hand to an adapter, select screw lengths that cannot contact the wrist communication board\. Contact may cause a short circuit\.

![](/uploads/images/khand-en/en-9.png)

