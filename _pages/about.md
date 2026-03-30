---
layout: about
title: 首页
permalink: /
subtitle: 四川大学 | 自动化（卓越工程师计划）
nav: true
nav_order: 1
description: 陈冠廷个人主页（中文）
lang_toggle: true

profile:
  align: right
  image: myphoto.jpg
  image_circular: false
  more_info: >
    <p>电话: (+86) 13365983865</p>
    <p>邮箱: cgtgetting@163.com</p>
    <p>成都, 中国</p>

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

你好，我是陈冠廷，四川大学电气工程学院自动化（卓越工程师计划）本科生，主要关注机器人、具身智能与视觉感知方向。

必修加权平均分（前五学期）89.74，专业排名 11/164（前 7%）。

## 教育背景

- 四川大学（985/双一流 A 类建设高校），自动化（卓越工程师计划），2023.09 - 至今
- 核心课程：自动控制原理（93）、计算机程序设计基础（94）、数据结构与算法（92）、计算机组成与设计（96）、计算机网络与通信（95）
- 荣誉：四川大学优秀学生干部（4%）、四川大学综合二等奖学金、四川大学综合三等奖学金、唐仲英德育奖学金
- 英语能力：CET-4 590，CET-6 520

## 项目经历与竞赛经历

### 第 25 届全国大学生机器人大赛 ROBOCON 赛事（视觉算法组组长 | 2025 年 9 月 - 至今）
- **定位与建图（SLAM）与目标识别（主赛道）**：使用 Mid360 激光雷达部署 Fastlivo2 SLAM 算法，实现高质量建图与高精度定位。
- **全局地图重定位优化**：在该算法基础上增加全局地图重定位功能，独创性地将 Teaser++ 与 GICP 结合。相比传统 RM 比赛重定位方法（初始位置偏差小时仍需约十秒完成定位），改进后的重定位方法在初始位置偏差大、遮盖多的情况下也能实现毫秒级快速定位。

<div class="col-sm-4 mt-3 mt-md-0">
  {% include figure.liquid path="assets/gif/XQ.gif" title="RM的重定位" class="img-fluid rounded z-depth-1" %}
</div>

{% include video.liquid path="assets/video/relocalization.mp4" class="img-fluid rounded z-depth-1" controls=true %}

### 12 自由度四足机器人（四足赛道）
- **强化学习训练及部署**：针对四足机器人运动控制任务，将强化学习算法引入团队自主建模的 12 自由度机器人系统；基于 HIMLoco 框架，完成策略训练、仿真验证及部署流程设计，实现 Sim-to-Sim 与 Sim-to-Real 迁移，提升策略在真实环境中的鲁棒性与适应能力。
- **全链路开发能力**：独立完成从结构设计参与、修改 URDF/XML 适配训练环境，到基于 legged_gym 训练框架调参训练，再到 Sim-to-Sim（Isaac Gym 到 MuJoCo）与 Sim-to-Real 的搭建，以及在 Jetson Xavier 边缘计算设备上的部署，掌握四足机器人从设计到落地的全流程。

<div class="col-sm-4 mt-3 mt-md-0">
  {% include figure.liquid path="assets/img/12DOF.png" title="四足机器人部署图" class="img-fluid rounded z-depth-1" %}
</div>

{% include video.liquid path="assets/video/实机.mp4" class="img-fluid rounded z-depth-1" controls=true %}

### 其他竞赛与荣誉
- 2025 中国机器人大赛暨 RoboCup 中国赛（FIRA 小型组）全国三等奖，核心成员。
- 第二十七届中国机器人及人工智能大赛四川省一等奖、全国二等奖，核心成员。

## 科研经历

### 具身扫地机器人基准测试集科研实践（第二作者，ECCV 2026 在投）
- **仿真场景搭建与测试环境开发**：参与具身机器人清扫与抓取任务的仿真工作；在 Isaac Sim 中搭建高保真仿真与测试场景。
- **物理交互设计**：构建物理拟真的移动清扫机器人底盘与 6 自由度机械臂，针对“清扫”与“抓取”任务设计物理交互环境，并制定多维度的定量评价指标。
- **能力收获**：熟练掌握 Isaac Sim 仿真软件的场景模型搭建、ROS 通信动作控制等技能。

### 基于 SFT+GRPO 的多模态视觉缺陷检测模型研究（项目负责人）
- **项目背景**：针对城市地下排水管道长期使用易产生树根、障碍物等病害，影响排水能力并易引发洪涝及环境问题，研发用于下水道缺陷检测的多模态视觉模型。
- **核心工作**：结合 SFT 与 GRPO 方案，基于 Qwen3-VL 模型的微调和多模态输入处理，优化 IoU 与格式奖励的强化学习目标函数，显著提升了模型在缺陷检测上的精度。
- **研究阶段**：
  - STAGE 1：Supervised Fine-Tuning (SFT)，基于 Qwen3-VL 基础模型进行 SFT 训练。
  - STAGE 2：Group Relative Policy Optimization (GRPO)，通过 GRPO 优化循环完成模型训练，实现强大的缺陷检测能力。

<div class="col-sm-4 mt-3 mt-md-0">
  {% include figure.liquid path="assets/img/VLM.png" title="VLM" class="img-fluid rounded z-depth-1" %}
</div>

## 技能与自我评价

- **能力定位**：拥有丰富的机器人软硬件基础，熟练在 Ubuntu 系统下进行基于 ROS2 的机器人开发；熟悉 Isaac Gym、Isaac Sim、Gazebo、MuJoCo 等仿真平台；掌握机器人导航与定位、机械臂操作、2D 和 3D 目标识别技术；具备嵌入式开发、PCB 设计及硬件制作经验。
- **项目能力**：具有丰富的项目复现经历，能够在团队中快速上手相关任务，动手与实践能力突出。具备 Linux、Python、C/C++、MATLAB 开发经验。
- **研究关注**：长期积极关注四足及人形机器人控制、上肢/机械臂控制、灵巧手等具身智能领域的研究。
- **学生工作与公益**：机器人足球协会部长，累计志愿服务 200+ 小时。


