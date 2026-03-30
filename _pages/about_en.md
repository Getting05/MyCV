---
layout: about
title: EN
permalink: /en/
subtitle: Sichuan University | Automation (Outstanding Engineer Program)
nav: true
nav_order: 2
description: English profile of Guanting Chen
lang_toggle: true

profile:
  align: right
  image: myphoto.jpg
  image_circular: false
  more_info: >
    <p>Phone: (+86) 13365983865</p>
    <p>Email: cgtgetting@163.com</p>
    <p>Chengdu, China</p>

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 0

latest_posts:
  enabled: false
  scrollable: false
  limit: 0
---

Hi, I am Guanting Chen, an undergraduate student in Automation (Outstanding Engineer Program), School of Electrical Engineering, Sichuan University.

My current interests focus on robotics, embodied AI, and visual perception.

## Education

- Sichuan University (Project 985 / Double First-Class), Automation, 2023.09 - Present
- Weighted required-course GPA (first 5 semesters): 89.74
- Rank (first 5 semesters): 11/164 (Top 7%)
- Core courses: Automatic Control (93), Intro to Programming (94), Data Structures and Algorithms (92), Computer Organization and Design (96), Computer Networks and Communication (95)

## Projects & Competitions

### 25th RoboCon Main Track (Vision Algorithm Team Leader) | 2025.09 - Present
- **Localization & Mapping (SLAM) and Target Recognition**: Deployed FAST-LIVO2 SLAM with Mid360 LiDAR for mapping and high-precision localization.
- **Global Map Relocalization**: Independently innovated a highly robust relocalization module by combining Teaser++ global registration with GICP local refinement. Compared to traditional RM methods (~10s for small initial deviations), this approach achieves millisecond-level localization even with large initial deviations and significant occlusion.

<div class="col-sm-4 mt-3 mt-md-0">
  {% include figure.liquid path="assets/gif/XQ.gif" title="RM的重定位" class="img-fluid rounded z-depth-1" %}
</div>

{% include video.liquid path="assets/video/relocalization.mp4" class="img-fluid rounded z-depth-1" controls=true %}

### 12-DOF Quadruped Robot (RoboCon Quadruped Track)
- **RL Training and Deployment**: Introduced reinforcement learning algorithms to a custom 12-DOF robot system for locomotion control based on the HIMLoco framework. Completed policy training, simulation verification, and deployment process design, achieving Sim-to-Sim and Sim-to-Real transfer to improve policy robustness and adaptability.
- **Full-Stack Capability**: Independently managed the entire pipeline: structural design participation, URDF/XML modification, parameter tuning in legged_gym, Sim2Sim (Isaac Gym to MuJoCo) and Sim2Real bridging, and deployment on Jetson Xavier edge devices.
- **Features**: Supports LAN web remote control. Utilizes libtorch C++ inference engine to output target joint actions based on angular velocity.
- **Next Steps**: Transplanting the Extreme-Parkour project to the custom quadruped for obstacle courses, and exploring MPC/VMC algorithms to meet diverse terrain requirements.

<div class="col-sm-4 mt-3 mt-md-0">
  {% include figure.liquid path="assets/img/12DOF.png" title="四足机器人部署图" class="img-fluid rounded z-depth-1" %}
</div>

{% include video.liquid path="assets/video/实机.mp4" class="img-fluid rounded z-depth-1" controls=true %}

### Additional Awards

- 2025 China Robot Competition & RoboCup China Open (FIRA Small Size): National Third Prize.
- 27th China Robot and AI Competition: Sichuan First Prize and National Second Prize.

## Research

### Embodied Sweeping Robot Benchmark Dataset Practice (Second Author, ECCV 2026 under submission)
- **Simulation and Testing Environment**: Built high-fidelity simulation scenarios and developed testing environments in Isaac Sim for sweeping and grasping tasks.
- **Physical Interaction Design**: Constructed physically realistic mobile sweeping robot chassis and 6-DOF robotic arms. Designed physical interaction environments for "sweeping" and "grasping" tasks and formulated multi-dimensional quantitative evaluation metrics.
- **Skills Gained**: Proficient in scene model building in Isaac Sim and ROS/ROS2 communication for action control.

### Multimodal Visual Defect Detection Model Research Based on SFT+GRPO (Project Lead)
- **Project Background**: Addressed urban underground drainage pipe issues (roots, obstacles) by developing a specialized multimodal visual model for sewer defect detection.
- **Core Work**: Fine-tuned the Qwen3-VL model combining SFT and GRPO schemes with multimodal input processing. Optimized RL objective functions with IoU and format rewards to significantly improve detection accuracy.
- **Research Stages**: 
  - STAGE 1: Supervised Fine-Tuning (SFT) based on the QWEN3-VL foundation model.
  - STAGE 2: Group Relative Policy Optimization (GRPO) training loop to achieve robust defect detection capabilities.

<div class="col-sm-4 mt-3 mt-md-0">
  {% include figure.liquid path="assets/img/VLM.png" title="VLM" class="img-fluid rounded z-depth-1" %}
</div>

## Skills & Self-Evaluation

- **Software & Systems**: Ubuntu/Linux, Python, C/C++, ROS2. Proficient in robot navigation, localization, robotic arm manipulation, and 2D/3D target recognition.
- **Simulation Platforms**: Isaac Gym, Isaac Sim, Gazebo, MuJoCo.
- **Hardware & Deployment**: Embedded development, PCB design, STM32/ESP32/ESP8266, Jetson Xavier edge deployment, hardware production.
- **Self-Evaluation**: Rich experience in project reproduction, hands-on debugging, and rapid team integration. Actively focusing on the long-term research of quadruped/humanoid robot control, upper limb/manipulator control, dexterous hands, and embodied AI.

