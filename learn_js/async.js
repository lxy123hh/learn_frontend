import fetch from 'node-fetch';

// 获取 GitHub 用户信息
const getUserInfoFromGitHub = async (username, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);  // 设置 10 秒超时

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);  // 清除超时

    if (!response.ok) {
      throw new Error('GitHub 用户信息请求失败');
    }

    return await response.json();  // 解析 JSON 数据
  } catch (error) {
    clearTimeout(timeoutId);  // 清除超时
    if (error.name === 'AbortError') {
      console.error('请求超时，操作被中止');
    } else {
      console.error('发生错误:', error.message);
    }
    return null;
  }
};

// 获取 GitHub 用户的公开仓库信息
const getUserReposFromGitHub = async (username, timeout = 10000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);  // 设置 10 秒超时

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);  // 清除超时

    if (!response.ok) {
      throw new Error('GitHub 用户仓库请求失败');
    }

    return await response.json();  // 解析 JSON 数据
  } catch (error) {
    clearTimeout(timeoutId);  // 清除超时
    if (error.name === 'AbortError') {
      console.error('请求超时，操作被中止');
    } else {
      console.error('发生错误:', error.message);
    }
    return null;
  }
};

// 主函数，获取 GitHub 用户信息和公开仓库
async function getGitHubUserData(username) {
  try {
    const userInfo = await getUserInfoFromGitHub(username);
    if (userInfo === null) {
      throw new Error('GitHub 用户信息未能获取');
    }
    console.log('用户信息:', userInfo);

    const userRepos = await getUserReposFromGitHub(username);
    if (userRepos === null) {
      throw new Error('GitHub 用户仓库未能获取');
    }
    console.log('用户公开仓库:', userRepos);

    return { userInfo, userRepos };
  } catch (error) {
    console.error('发生错误:', error.message);
  }
}

// 调用函数，传入 GitHub 用户名（如 'octocat'）
getGitHubUserData('lxy123hh');
