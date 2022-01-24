/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react'
import { get } from 'lodash'

import { TaskStatus, TaskTimeType, TaskType } from '../../../../components/status'

export function TaskInfo (props: any) {
    const { task } = props
    return (
        <div className="ant-table bd task-detail">
            <table>
                <tbody className="ant-table-tbody" >
                    <tr>
                        <td>任务名称：</td><td>{task.batchTask.name || '-'}</td>
                        <td>任务ID：</td><td>{task.batchTask.id || '-'}</td>
                    </tr>
                    <tr>
                        <td>任务类型：</td>
                        <td><TaskType value={task.batchTask.taskType} /></td>
                        <td>状态：</td>
                        <td><TaskStatus value={task.status} /></td>
                    </tr>
                    <tr>
                        <td>调度周期：</td><td><TaskTimeType value={task.taskPeriodId}/></td>
                        <td>计划时间：</td><td>{task.cycTime}</td>
                    </tr>
                    <tr>
                        <td>开始时间：</td>
                        <td>{task.execStartDate ? task.execStartDate : '-'}</td>
                        <td>结束时间：</td>
                        <td>{task.execStartDate ? task.execEndDate : '-'}</td>
                    </tr>
                    <tr>
                        <td>所属项目：</td>
                        <td>{task.batchTask.projectName}</td>
                        <td>责任人：</td>
                        <td>
                            {get(task, 'batchTask.ownerUser.userName', '-')}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export function TaskOverView (props: any) {
    const { task, project } = props
    const display = task.status === 5 ? 'none' : 'table-row'
    return (
        <div className="task-floating-window ant-table bd" >
            <table>
                <tbody className="ant-table-tbody" >
                    <tr><td>任务名称：</td><td>{task.batchTask ? task.batchTask.name : '-'}</td></tr>
                    <tr><td>运行状态：</td><td><TaskStatus value={task.status} /></td></tr>
                    <tr><td>所属项目：</td><td>{project.projectName}</td></tr>
                    <tr><td>任务类型：</td><td><TaskType value={task.batchTask.taskType} /></td></tr>
                    <tr>
                        <td>定时时间：</td>
                        <td>{task.cycTime}</td>
                    </tr>
                    <tr style={{ display }}>
                        <td>开始时间：</td>
                        <td>{task.execStartDate ? task.execStartDate : '-'}</td>
                    </tr>
                    <tr style={{ display }}>
                        <td>结束时间：</td>
                        <td>{task.execEndDate ? task.execEndDate : '-'}</td>
                    </tr>
                    <tr>
                        <td>责任人：</td>
                        <td>
                            {task.batchTask && task.batchTask.createUser
                                ? task.batchTask.createUser.userName : '-'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}