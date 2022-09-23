-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2022 at 04:59 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survii_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedbackId` varchar(40) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `message` text NOT NULL,
  `userType` enum('RESPONDENT','CREATOR') NOT NULL,
  `timestampSubmitted` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`feedbackId`, `username`, `email`, `message`, `userType`, `timestampSubmitted`) VALUES
('lzws2vf11', 'User_Respondent09', 'test@email.com', 'test dev feedback', 'RESPONDENT', '2021-06-09 10:43:11'),
('mmwh2ejtq', 'Creator_01', 'a@a', 'test', 'CREATOR', '2021-06-19 01:59:49'),
('o3zy2hwp2', 'User_Respondent09', 'a@a', 'asd', 'RESPONDENT', '2021-06-18 15:55:19'),
('oj77d11sy', 'User_Respondent09', 'sample@email.com', 'Nice app!', 'RESPONDENT', '2021-06-03 05:42:52'),
('y15mqzom8', 'User_Respondent09', 'sample@email.com', 'How can I contact a survey creator?', 'RESPONDENT', '2021-06-03 07:50:40');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `responseId` varchar(40) NOT NULL,
  `surveyId` varchar(20) NOT NULL,
  `respondentId` varchar(20) NOT NULL,
  `submitted` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`responseId`, `surveyId`, `respondentId`, `submitted`) VALUES
('6szrkahff-jvwsm87kx', 'ab34rew34', 'User_Respondent09', '2021-06-12 08:11:09'),
('ep1v11f0n-l1wz5or5i', 'bh3gft356', 'User_Respondent09', '2021-06-12 08:09:15'),
('sc0qdd8ie-62e1tmlrh', 'q01k3j6nd', 'User_Respondent09', '2021-06-12 07:10:03'),
('uor8nkdfg-ntznuj0wp', 'o18iwej2a', 'User_Respondent09', '2021-06-18 15:54:54');

-- --------------------------------------------------------

--
-- Table structure for table `response_items`
--

CREATE TABLE `response_items` (
  `responseItemId` varchar(60) NOT NULL,
  `responseId` varchar(40) NOT NULL,
  `itemId` varchar(40) NOT NULL,
  `choiceId` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `response_items`
--

INSERT INTO `response_items` (`responseItemId`, `responseId`, `itemId`, `choiceId`) VALUES
('6szrkahff-jvwsm87kx-ggevi4i8g', '6szrkahff-jvwsm87kx', 'ab34rew34-439kri8r4', 'ab34rew34-439kri8r4-als8du4i9'),
('ep1v11f0n-l1wz5or5i-58x0iisgh', 'ep1v11f0n-l1wz5or5i', 'bh3gft356-027ds73uj', 'bh3gft356-027ds73uj-11je888rj'),
('ep1v11f0n-l1wz5or5i-ntekwvqaw', 'ep1v11f0n-l1wz5or5i', 'bh3gft356-uhf834h9d', 'bh3gft356-uhf834h9d-19v64nv8e'),
('sc0qdd8ie-62e1tmlrh-invq6s5u1', 'sc0qdd8ie-62e1tmlrh', 'q01k3j6nd-i3u2r98ni', 'q01k3j6nd-i3u2r98ni-v234hwki3'),
('uor8nkdfg-ntznuj0wp-hrh9yf61y', 'uor8nkdfg-ntznuj0wp', 'o18iwej2a-2jg94hdt5', 'o18iwej2a-2jg94hdt5-298dfj32e');

-- --------------------------------------------------------

--
-- Table structure for table `surveys_tb`
--

CREATE TABLE `surveys_tb` (
  `surveyId` varchar(20) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL,
  `creatorId` varchar(20) NOT NULL,
  `dateCreated` date NOT NULL,
  `isClosed` enum('true','false') NOT NULL DEFAULT 'false',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `surveys_tb`
--

INSERT INTO `surveys_tb` (`surveyId`, `title`, `description`, `creatorId`, `dateCreated`, `isClosed`, `timestamp`) VALUES
('293um4w5e', 'Survey for our Customer Product Ordering', 'We appreciate if you would take the time to answer our survey. Thank you!', 'Pizza_Guy99', '2021-05-26', 'false', '2021-05-26 08:53:10'),
('3j49t8n23', 'Company Recommendation', 'We need your responses for this matter.', 'Surveyist_143', '2021-05-26', 'false', '2021-05-26 08:48:58'),
('ab34rew34', 'Survey for our Users', 'This is a sample survey for the users of this site.', 'Creator_01', '2021-05-25', 'false', '2021-05-25 16:06:30'),
('bh3gft356', 'Frequency of Engaging in Surveys', 'A quick two-question survey for you.', 'Creator_01', '2021-05-26', 'false', '2021-05-26 08:57:30'),
('ert94jk43', 'Product Satisfaction Rating', 'We appreciate if you would take the time to answer our survey. Have a good day!', 'Surveyist_143', '2021-05-26', 'false', '2021-05-26 08:35:40'),
('iow2jnha9', 'Organization Investment Survey', 'This will help us decide on our next steps.', 'HR_Agent', '2021-05-26', 'false', '2021-05-26 08:39:19'),
('o18iwej2a', 'Gadget Preference', 'We need to know your most convenient device in using our platform.', 'TechGuru', '2021-05-26', 'false', '2021-05-26 09:00:47'),
('q01k3j6nd', 'Reopening of Face-to-face Classes', 'Please answer this survey with all honesty.', 'Creator_01', '2021-05-26', 'false', '2021-05-26 10:34:00'),
('xk4u543ko', 'Current Relationship Status', 'We would like to gather some information.', 'Creator_01', '2021-05-26', 'false', '2021-05-26 08:43:00'),
('y6kyti9i4', 'Demographic Survey Sample', 'This is an example of a demographic survey that we can host in this platform.', 'Creator_01', '2021-05-26', 'false', '2021-05-26 10:06:33');

-- --------------------------------------------------------

--
-- Table structure for table `survey_items_choices_tb`
--

CREATE TABLE `survey_items_choices_tb` (
  `choiceId` varchar(60) NOT NULL,
  `itemId` varchar(40) NOT NULL,
  `description` text NOT NULL,
  `orderIndex` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `survey_items_choices_tb`
--

INSERT INTO `survey_items_choices_tb` (`choiceId`, `itemId`, `description`, `orderIndex`) VALUES
('116cz3tqt-kdj0fwdez-hw19zin80', '116cz3tqt-kdj0fwdez', 'Test', 0),
('116cz3tqt-kdj0fwdez-uys1cec6y', '116cz3tqt-kdj0fwdez', 'Test', 1),
('293um4w5e-bj342y89r-28fdsbe4z', '293um4w5e-bj342y89r', 'Pepperoni', 1),
('293um4w5e-bj342y89r-78v4bv2bv', '293um4w5e-bj342y89r', 'Bacon', 2),
('293um4w5e-bj342y89r-91c64nv6w', '293um4w5e-bj342y89r', 'Chicken', 3),
('293um4w5e-bj342y89r-x75ndoqw6', '293um4w5e-bj342y89r', 'Tuna', 4),
('3j49t8n23-328h298gy-29hca83tk', '3j49t8n23-328h298gy', 'Insurance', 3),
('3j49t8n23-328h298gy-3945hdg89', '3j49t8n23-328h298gy', 'Product feedback', 2),
('3j49t8n23-328h298gy-asc98sh34', '3j49t8n23-328h298gy', 'Brand research', 4),
('3j49t8n23-328h298gy-yg9823k38', '3j49t8n23-328h298gy', 'Service feedback', 1),
('ab34rew34-439kri8r4-a983n52i1', 'ab34rew34-439kri8r4', 'Others', 5),
('ab34rew34-439kri8r4-a9s8dh5j4', 'ab34rew34-439kri8r4', 'Newspaper or Magazine', 2),
('ab34rew34-439kri8r4-als8du4i9', 'ab34rew34-439kri8r4', 'Internet', 4),
('ab34rew34-439kri8r4-as97jd7d6', 'ab34rew34-439kri8r4', 'Television or Radio', 1),
('ab34rew34-439kri8r4-mvb7rjh49', 'ab34rew34-439kri8r4', 'Word-of-Mouth', 3),
('bh3gft356-027ds73uj-11je888rj', 'bh3gft356-027ds73uj', 'Often', 2),
('bh3gft356-027ds73uj-12sadh438', 'bh3gft356-027ds73uj', 'Always', 1),
('bh3gft356-027ds73uj-48v923jti', 'bh3gft356-027ds73uj', 'Rarely', 3),
('bh3gft356-027ds73uj-n4fu3jr98', 'bh3gft356-027ds73uj', 'Never', 4),
('bh3gft356-uhf834h9d-12b12834y', 'bh3gft356-uhf834h9d', 'Always', 1),
('bh3gft356-uhf834h9d-19v64nv8e', 'bh3gft356-uhf834h9d', 'Rarely', 3),
('bh3gft356-uhf834h9d-39875esaw', 'bh3gft356-uhf834h9d', 'Often', 2),
('bh3gft356-uhf834h9d-b349gj48f', 'bh3gft356-uhf834h9d', 'Never', 4),
('dq1nts9b1-nt9ch4ps4-2oy0a1089', 'dq1nts9b1-nt9ch4ps4', 'Test', 0),
('dq1nts9b1-nt9ch4ps4-ldbmkrj74', 'dq1nts9b1-nt9ch4ps4', 'Test', 1),
('ert94jk43-akd875h65-1j80rkif8', 'ert94jk43-akd875h65', 'Alright', 3),
('ert94jk43-akd875h65-a90ik93h7', 'ert94jk43-akd875h65', 'Dissatisfied', 2),
('ert94jk43-akd875h65-a9j73u59f', 'ert94jk43-akd875h65', 'Satisfied', 1),
('iow2jnha9-285jgy2uf', 'iow2jnha9-285jgy2uf', 'Disagree', 2),
('iow2jnha9-285jgy2uf-a86he38fg', 'iow2jnha9-285jgy2uf', 'Neither Agree nor Disagree', 3),
('iow2jnha9-285jgy2uf-akd7hrua2', 'iow2jnha9-285jgy2uf', 'Agree', 1),
('o18iwej2a-2jg94hdt5-02nvu4c92', 'o18iwej2a-2jg94hdt5', 'Others', 4),
('o18iwej2a-2jg94hdt5-298dfj32e', 'o18iwej2a-2jg94hdt5', 'Desktop or Laptop', 1),
('o18iwej2a-2jg94hdt5-pq3n6v4kc', 'o18iwej2a-2jg94hdt5', 'Smartphone', 3),
('o18iwej2a-2jg94hdt5-vnio1t9dw', 'o18iwej2a-2jg94hdt5', 'Tablet', 2),
('q01k3j6nd-i3u2r98ni-324njasd8', 'q01k3j6nd-i3u2r98ni', 'No', 2),
('q01k3j6nd-i3u2r98ni-45bsre98w', 'q01k3j6nd-i3u2r98ni', 'Undecided', 3),
('q01k3j6nd-i3u2r98ni-v234hwki3', 'q01k3j6nd-i3u2r98ni', 'Yes', 1),
('tbhyoj0jh-bu6qu73m7-gxfp86cmn', 'tbhyoj0jh-bu6qu73m7', 'Test', 0),
('tbhyoj0jh-bu6qu73m7-ytd18vq33', 'tbhyoj0jh-bu6qu73m7', 'Test', 1),
('xk4u543ko-3d82j8s09-2jus94kf8', 'xk4u543ko-3d82j8s09', 'Single', 1),
('xk4u543ko-3d82j8s09-75j764yft', 'xk4u543ko-3d82j8s09', 'Widowed', 5),
('xk4u543ko-3d82j8s09-a87jdy64k', 'xk4u543ko-3d82j8s09', 'Divorced', 4),
('xk4u543ko-3d82j8s09-a9203nd7s', 'xk4u543ko-3d82j8s09', 'In a relationship', 2),
('xk4u543ko-3d82j8s09-ai823ga9d', 'xk4u543ko-3d82j8s09', 'Married', 3),
('y6kyti9i4-hu12si348-2187bjhd3', 'y6kyti9i4-hu12si348', 'Under 18', 1),
('y6kyti9i4-hu12si348-2jhf84hd8', 'y6kyti9i4-hu12si348', '31-45', 3),
('y6kyti9i4-hu12si348-3hf873hf1', 'y6kyti9i4-hu12si348', 'Above 64', 5),
('y6kyti9i4-hu12si348-4jf892itn', 'y6kyti9i4-hu12si348', '46-64', 4),
('y6kyti9i4-hu12si348-ijn3489ds', 'y6kyti9i4-hu12si348', '18-30', 2);

-- --------------------------------------------------------

--
-- Table structure for table `survey_items_tb`
--

CREATE TABLE `survey_items_tb` (
  `itemId` varchar(40) NOT NULL,
  `surveyId` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `orderItems` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `survey_items_tb`
--

INSERT INTO `survey_items_tb` (`itemId`, `surveyId`, `description`, `orderItems`) VALUES
('293um4w5e-bj342y89r', '293um4w5e', 'What is your prefered Pizza Topping among the list?', 0),
('3j49t8n23-328h298gy', '3j49t8n23', 'Which of the ABC Company\'s services would you recommend to a friend or colleague?', 0),
('ab34rew34-439kri8r4', 'ab34rew34', 'How did you hear about our website?', 0),
('bh3gft356-027ds73uj', 'bh3gft356', 'How often do you participate in answering surveys?', 0),
('bh3gft356-uhf834h9d', 'bh3gft356', 'How often do you conduct surveys?', 1),
('ert94jk43-akd875h65', 'ert94jk43', 'How would you rate your experience with our product?', 0),
('iow2jnha9-285jgy2uf', 'iow2jnha9', 'I am satisfied with the investment my organization makes in education.', 0),
('o18iwej2a-2jg94hdt5', 'o18iwej2a', 'Which of these devices do you prefer or you frequently use when visiting our website?', 0),
('q01k3j6nd-i3u2r98ni', 'q01k3j6nd', 'Are you in favor of bringing back face-to-face classes for the school year 2021?', 0),
('xk4u543ko-3d82j8s09', 'xk4u543ko', 'Which of the following best describes your current relationship status?', 0),
('y6kyti9i4-hu12si348', 'y6kyti9i4', 'Please select your age group.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `userType` enum('RESPONDENT','CREATOR','ADMIN') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `lastname`, `firstname`, `userType`) VALUES
('admin327', '$2y$10$k22vNiu0BLKfUr.ARbpFdOrRdnJsVWeOipk26yS4VRjMF5E84Hfni', 'Durant', 'Stephen', 'ADMIN'),
('admin_new', '$2y$10$A4Ij75y2kSQeg0BPxzFuj.vYzlhUfW9XoyVzUUKKA9jannK1luKyW', 'Paul', 'Chris', 'ADMIN'),
('admin_test', '$2y$10$htFVpPTd82W6iPLbAgA2R.J5z8xpOmNFwpO.3iXQ9Sz/uG1bgxPyG', 'Davis', 'Anthony', 'ADMIN'),
('Creator_01', '$2y$10$DOHpJZqqoSG4s.NGkXB51O6o5ZO77sQtGyoBsV1Uo4p/BBURSUQDC', 'Eastbrook', 'Russel', 'CREATOR'),
('Sursurveyvey', '$2y$10$N1hZVb5zU0JRkZC/PHLNwOTUYQcWoXwAzPncxxI4kFQtFQIUkIivq', 'Tanglad', 'Nancy', 'RESPONDENT'),
('TechGuru99', '$2y$10$8oeLDDIekYj83o9/sKTiUuhwjcnJT8/PvuY2Xl9cqsKWiHFHDg6PW', 'Jameson', 'John', 'CREATOR'),
('User_Respondent09', '$2y$10$nxSwSmbX/dcJMGBLwqpfHeZAGPxyrK/13nqNlPV26RczZdG408H52', 'Doe', 'John', 'RESPONDENT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedbackId`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`responseId`);

--
-- Indexes for table `response_items`
--
ALTER TABLE `response_items`
  ADD PRIMARY KEY (`responseItemId`);

--
-- Indexes for table `surveys_tb`
--
ALTER TABLE `surveys_tb`
  ADD PRIMARY KEY (`surveyId`);

--
-- Indexes for table `survey_items_choices_tb`
--
ALTER TABLE `survey_items_choices_tb`
  ADD PRIMARY KEY (`choiceId`);

--
-- Indexes for table `survey_items_tb`
--
ALTER TABLE `survey_items_tb`
  ADD PRIMARY KEY (`itemId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
